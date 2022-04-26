import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  // Сверьте JWT в локальном хранилище с сервером и загрузите информацию о пользователе.
  // Он запускается один раз при запуске приложения.
  populate() {
    // Если JWT обнаружен, попытайтесь получить и сохранить информацию о пользователе
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Удалите все возможные остатки предыдущих состояний авторизации
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Сохраните JWT, отправленный с сервера, в локальном хранилище
    this.jwtService.saveToken(user.token);
    // Установите текущие данные пользователя в наблюдаемую
    this.currentUserSubject.next(user);
    // Установите значение isAuthenticated в true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Удалить JWT из локального хранилища
    this.jwtService.destroyToken();
    // Установить текущего пользователя в пустой объект
    this.currentUserSubject.next({} as User);
    // Установите статус авторизации на false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Обновление пользователя на сервере (электронная почта, пароль и т.д.)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      // Обновление наблюдаемой переменной currentUser
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }

}

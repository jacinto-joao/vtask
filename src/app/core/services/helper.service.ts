import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class HelperService {
	
    public api = 'https://www.facepixelizer.com/';

	public errorHandler(error: HttpErrorResponse | any) {
		let errMsg: string;
		if (error.error instanceof Error) {
			errMsg = 'Something Went wrong, Please try again or refresh the page. If the error persist contact our support team!';
		} else {
			if (error.status == 401 && error.statusText === 'Unauthorized') {
				errMsg = 'Your Email or password is incorrect';
				localStorage.removeItem('token');
			} else if (error.status == 422) {
				errMsg = error.error;
			} else if (error.status == 503) {
				errMsg = error.status;

			} else if (error.status == 500) {
				errMsg = error.status;
			} else if (error.status == 404) {
				errMsg = error.status;
			} else if (error.status == 0) {
				errMsg = error.status;
			} else {
				console.log(error);
				errMsg = error.status;
			}

			//errMsg = 'Server side Error';
		}
		return Observable.throw(errMsg);
	}

	getToken() {
		return localStorage.getItem('token');
	}

	errorMsgResponse(status: number) {
		if (status === 503) {
			return 'Were Having problems Connecting to our servers right now, Please Logout or Refresh the page';
		} else if (status === 500) {
			return 'Error! There is something wrong with the API. Please Contact our Support team regarding this issue.'
		} else if (status === 404) {
			return '404:  API url not found. Please Contact support team';
		} else if (status === 401) {
			return 'Your Session is expired, Please login to continue working';
		} else if (status === 422) {
			return 'Oops: There are some issues with the form fields.';
		} else if (status == 0){
			return 'Were Having problems Connecting to our servers right now! Please report this error to our support team!'
		}
	}
}

/**
 * @author [Jacinto Joao] <[jacintotbrc@gmail.com]>
 * @description [Helper class to handle observables]
 */
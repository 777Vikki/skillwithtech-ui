import { HttpInterceptorFn } from '@angular/common/http';

const gitHubLink = 'https://777vikki.github.io';
const repository = 'skillwithtech-data';

const BASE_URL = [gitHubLink, repository].join('/');  // your main API base

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {

  // Add base URL
  const apiReq = req.clone({
    url: `${BASE_URL}${req.url}?ts=${new Date().getTime()}`
  });

  return next(apiReq);
};

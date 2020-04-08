import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AddHeaderRequestInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger
        const clonedRequest = req.clone({ headers: req.headers
                .set('Accept', 'application/json')
                .set('Access-Control-Allow-Origin', 'venados.dacodes.mx')
        });
        return next.handle(req);
    }
}

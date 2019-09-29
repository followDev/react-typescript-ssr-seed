// internal
import { HttpService } from '../http.service';

describe('HTTP Service', () => {
    it('can make GET http call', async () => {
        const payload = {};
        const restApiCall = await HttpService.buildRestApiCall(
            'api', 'GET', '/cats', 'test', payload
        );
        restApiCall.subscribe((responseApiCall) => {
            expect(responseApiCall).toBeDefined();
            expect(responseApiCall).toStrictEqual({
                message: 'API call failed',
                error: true,
                payload,
            });
        });
    });
    it('can handle errors', async () => {
        const payload = 'asdasd';
        const restApiCall = await HttpService.buildRestApiCall(
            'apiasdasd', 'GEsT', '/caats/asd', 'testasdsd', payload
        );
        restApiCall.subscribe((responseApiCall) => {
            expect(responseApiCall).toBeDefined();
            expect(responseApiCall).toStrictEqual({
                message: 'API call failed',
                error: true,
                payload,
            });
        });
    });
});

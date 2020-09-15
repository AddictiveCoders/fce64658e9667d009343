export class Api {
    /**
     * function to call the get api
     * @param: url which we will be hitting the get api
     */
    async getApi(param) {
        return fetch(param, {
            method: 'GET',
        })
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            });
    }
}

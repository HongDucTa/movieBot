'use strict'

class FBeamer
{
    constructor({PageAccessToken, VerifyToken})
    {
        try
        {
            this.PageAccessToken = PageAccessToken;
            this.VerifyToken = VerifyToken;
        }
        catch (error)
        {
            console.log(error);
        }
    }

    registerHook(req, res)
    {
        const params = req.query;
        const mode = params['hub.mode'],
        token = params['hub.verify_token'],
        challenge = params['hub.challenge'];

        try
        {
            if (mode === 'subscribe' && token === this.VerifyToken)
            {
                console.log('Webhook is registered.');
                return res.send(challenge);
            }
            else
            {
                throw "Could not register webhook!";
                return res.sendStatus(200);
            }
        }
        catch (e)
        {
            console.log(e);
        }
    }
}

module.exports = FBeamer;
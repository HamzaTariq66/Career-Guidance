const expressJwt = require('express-jwt');
const config = require('config.json');
const adminService = require('../admins/admin.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/admins/authenticate',
            '/admins/register',
            '/universities/list',
            '/colleges/list',
            '/schools/list'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const admin = adminService.getById(payload.sub);

    //revoke token if admin no longer exists
    if (!admin) {
       return done(null, true);
    }

    done();
};
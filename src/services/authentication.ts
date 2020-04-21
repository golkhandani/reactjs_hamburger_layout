const fakeAuth = {
    isAuthenticated: () => localStorage.getItem('access_token') ? true : false,
    authenticate(cb: any) {
        localStorage.setItem('access_token', 'true')
        setTimeout(cb, 100); // fake async
    },
    signout(cb: any) {
        localStorage.removeItem('access_token')
        setTimeout(cb, 100);
    }
};

export default fakeAuth;
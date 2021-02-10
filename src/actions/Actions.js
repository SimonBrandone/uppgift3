export const REGISTER_USER = 'REGISTER_USER';

export function registerUser(name, email, password) {
    return { type: REGISTER_USER, user: name, email: email, password: password};
}
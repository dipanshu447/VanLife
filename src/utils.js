import { redirect } from "react-router-dom"

export async function requireAuth(req) {
    const isLoggedIn = localStorage.getItem("loggedin");
    const pathname = new URL(req.url).pathname;
    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first!&redirectTo=${pathname}`);
        response.body = true;
        throw response;
    }

    return null;
}
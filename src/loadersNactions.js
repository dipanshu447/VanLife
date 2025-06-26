import { getHostVans, loginUser, getVans } from './api.js';
import { requireAuth } from "./utils.js";
import { redirect } from 'react-router-dom';

export async function hostvanLoader({ request }) {
    await requireAuth(request);
    return { noncriticalData: getHostVans() };
}

export async function hostvandetailLoader({ request, params }) {
    await requireAuth(request);
    return { noncriticalData : getHostVans(params.id)};
}

export function vanLoader() {
    return {
        noncriticalData: getVans()
    }
}

export async function vanDetailLoader({ params }) {
    return { noncriticalData: getVans(params.id)};
}

export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export async function loginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const redirection = new URL(request.url).searchParams.get("redirectTo") || "/host";
    try {
        const res = await loginUser({ email, password });
        localStorage.setItem("loggedin", true);
        console.log(res);
        const response = redirect(redirection);
        response.body = true;
        return response;
    } catch (err) {
        console.log(err);
        return err.message;
    }
}
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
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

export default function Login() {
    const navigation = useNavigation();
    const errorMessage = useActionData();
    const message = useLoaderData();

    return (
        <Form method="post" className="grow px-5 lg:px-6 flex flex-col gap-3 mt-8 items-center" replace>
            <h1 className="text-2xl font-bold text-[#161616]">Sign in to your account</h1>
            {message && <h2 className="text-red-500 font-semibold text-lg">{message}</h2>}
            {errorMessage && <h2 className="text-red-500 font-semibold text-lg">{errorMessage}</h2>}
            <div className="mt-4 flex flex-col w-full md:w-2xl">
                <input className="w-full font-normal box-border px-4 bg-white py-2 border border-[#D1D5DB] rounded-t-md focus-visible:outline-[#e69b0a]" type="email" placeholder="Email address" name="email" />
                <input className="w-full font-normal box-border px-4 bg-white py-2 border border-t-0 border-[#D1D5DB] rounded-b-md focus-visible:outline-[#e69b0a]" type="password" placeholder="Password" name="password" />
                <button disabled={navigation.state === "submitting" ? true : false} type="submit" className='text-white transition-all duration-1000 ease-[cubic-bezier(0.12,0.08,0,1.59)] mt-6 w-full text-center truncate font-semibold bg-[#FF8C38] h-10 rounded-sm cursor-pointer hover:scale-101 hover:translate-px disabled:opacity-60'>
                    {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </div>
            <div className="font-semibold text-[#161616] mt-5 text-sm">
                Don’t have an account?
                <span className="ml-1 text-[#FF8C38] cursor-pointer">Create one now</span>
            </div>
            <div className="mt-8 p-4 w-full md:w-2xl bg-[#FFF7E6] border border-[#FFDB9B] rounded-md shadow-sm text-sm text-[#5C3B00]">
                <h3 className="font-semibold text-base mb-2">Demo Credentials</h3>
                <p className="mb-1">Use these credentials to explore the host features:</p>
                <div className="bg-white p-3 rounded border border-[#FFEBBF]">
                    <p><span className="font-medium">Email:</span> <code className="text-[#C2410C]">b@b.com</code></p>
                    <p><span className="font-medium">Password:</span> <code className="text-[#C2410C]">p123</code></p>
                </div>
            </div>
        </Form>
    )
}
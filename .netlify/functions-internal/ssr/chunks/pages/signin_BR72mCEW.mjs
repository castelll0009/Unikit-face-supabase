/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_DygpA27W.mjs';

const $$Astro = createAstro("https://castelll0009.github.io");
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const title = "Sign in";
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/api/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section h-[100vh] flex flex-col pt-10 items-center" style="height: 100vh; padding-top: 100px;"> <h1>Iniciar sesión </h1> <p>Unicamente usuario de unicauca puede iniciar sesion en  Unikit </p> <!-- <a href="/register">Create an account</a> --> <form action="/api/auth/signin" method="post" class="flex flex-col"> <!-- <label for="email" for="email">Correo Unicauca</label>
    <input type="email" name="email" id="email" />
    <label for="password">Contraseña</label>
    <input type="password" name="password" id="password" />
    <button type="submit">Iniciar sesión</button> --> <button value="github" name="provider" type="submit">Sign in with GitHub</button> <button value="google" name="provider" class="w-full dark:bg-zinc-100 p-1.5 border border-zinc-300 dark:border-zinc-100 flex justify-center items-center gap-2 rounded-md mt-2 dark:text-zinc-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed" type="submit"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-auto" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"> <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path> <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path> <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path> <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path> </svg>
Iniciar con google
</button> </form> </section> ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/api/signin.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/api/signin.astro";
const $$url = "/api/signin";

export { $$Signin as default, $$file as file, $$url as url };

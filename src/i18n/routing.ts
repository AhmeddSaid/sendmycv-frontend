import {createNavigation} from "next-intl/navigation";
import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "ar"],
    defaultLocale: "en",
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);

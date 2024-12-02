"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import Link  from "next/link";

/**
 * Note: issue with rendering, an error will occur using anchor tag 
 * it is best to use the Link attribute rather than the anchor tag
 */
export const Navigation = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold mr-4 text-white-500" : "mr-4 text-blue-500"}>Home</Link>
            <Link href="/about" className={pathname.startsWith("/about") ? "font-bold mr-4 text-white-500" : "mr-4 text-blue-500"}>About</Link>
            <Link href="/blog/first-post" className={pathname.startsWith("/blog") ? "font-bold mr-4 text-white-500" : "mr-4 text-blue-500"}>Blog</Link>
            <Link href="/product" className={pathname === "/product" ? "font-bold mr-4 text-white-500" : "mr-4 text-blue-500"}>Product</Link>
            <Link href="/product/iphone" className={pathname.startsWith("product/") ? "font-bold mr-4 text-white-500" : "mr-4 text-blue-500"}>Product ID</Link>
            
            <a href="/" className="mr-4 text-blue-500">Back to Home - A Tag</a>

            <button onClick={() => router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">Back</button>
        </nav>
    );
}
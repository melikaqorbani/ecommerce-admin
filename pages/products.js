import Layout from "@/components/Layout";
import Link from "next/link";

export default function products(){
    return (
    <Layout> 
        <Link className="bg-blue-900 rounded-md text-white py-2 px-2" href={'/products/new'}> اضافه کردن محصول جدید </Link>
    </Layout>
    )
} 
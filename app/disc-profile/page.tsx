import { ProductPage } from "@/components/page-template";
import { pageData } from "@/lib/content";

export default function DiscProfilePage() {
  return <ProductPage {...pageData.disc} />;
}

import { ProductPage } from "@/components/page-template";
import { pageData } from "@/lib/content";

export default function HomeServicesAuraPage() {
  return <ProductPage {...pageData.homeServices} />;
}

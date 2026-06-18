import { ProductPage } from "@/components/page-template";
import { pageData } from "@/lib/content";

export default function BusinessConsultingPage() {
  return <ProductPage {...pageData.business} />;
}

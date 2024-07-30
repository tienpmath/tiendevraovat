import { title } from "@/components/primitives";
import { revalidateTag } from "next/cache";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import Image from "next/image";
export default function AboutPage() {
  revalidateTag("collection");
  return (
    <div>
      <h1 className={title()}>Giới thiệu</h1>
      <hr />
      <Card className="max-w-[1024px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="/web2-1.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Rao vặt Lâm Đồng</p>
            <p className="text-small text-default-500">Rao vặt Lâm Đồng.vn</p>
          </div>
        </CardHeader>

        <CardBody>
          <p>
            Nhu cầu mua bán tại các cộng đồng cư dân hiện nay gần như là một
            phần của cuộc sống.
            <br />
            Hiểu được điều này, Rao vặt Lâm Đồng giải quyết bài toán ấy. Mong
            muốn giúp các bạn trẻ tại Lâm Đồng dễ dàng tìm kiếm, tiếp cận sản
            phẩm, dịch vụ mình mong muốn. <br />
            Thông tin được cập nhật chính xác, nhanh chóng - Hỗ trợ online liên
            tục.
          </p>
        </CardBody>

        <CardFooter>
          <Link isExternal showAnchorIcon href="#">
            .
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

import { BrandContextMenu } from "@/components/brand-context-menu";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
          "bg-[url(https://pub-239550f7c4ef47228c2ee01c89b35545.r2.dev/IMG_3321%202.JPG)] bg-cover bg-position-[center_calc(50%-50px)]"
        )}
      >
        {/* <ChanhDaiMark id="js-cover-mark" className="h-1/4 w-auto" /> */}
      </div>
    </BrandContextMenu>
  );
}

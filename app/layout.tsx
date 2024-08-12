import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*  inter.className 返回一个字符串，表示 Inter 字体的 CSS 类名。antialiased: 
      这是一个额外的 CSS 类名，用于设置抗锯齿效果。${...}: 使用模板字符串语法将多个字符串拼接在一起。*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

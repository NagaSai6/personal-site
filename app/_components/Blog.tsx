import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Blog() {
  const blogs = [1, 1, 1, 1].map((item, index) => {
    return (
      <Card className="flex p-2 my-1 border-0" key={index}>
        <CardHeader>
          <Image
            src="https://picsum.photos/200"
            className="rounded-lg"
            objectFit=""
            width={200}
            height={100}
            alt="blog_image"
          />
        </CardHeader>
        <CardContent className="my-auto p-1">
          <h3 className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </h3>
          <div className="space-x-2 mt-4">
            <p className="inline">Tags : </p>
            <Button className="h-2 w-16 p-3">Next.js</Button>
            <Button className="h-2 w-16 p-3">aws</Button>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  });
  return (
    <section className="lg:p-6">
      <h2 className="text-4xl font-garamond font-bold text-center">
        Latest Spells
      </h2>

      <div className="mx-auto mt-6 lg:w-[98%]">
        <div className="grid grid-cols-12 space-x-4">
          <div className="col-span-6 p-2">
            <Card className="flex border-0">
              <CardHeader>
                <Image
                  src="https://picsum.photos/200"
                  className="rounded-lg"
                  width={700}
                  height={700}
                  alt="blog_image"
                />
              </CardHeader>
              <CardContent className="my-auto">
                <h3 className="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </h3>
                <div className="space-x-2 mt-4">
                  <p className="inline">Tags : </p>
                  <Button className="h-2 w-16 p-3">Next.js</Button>
                  <Button className="h-2 w-16 p-3">aws</Button>
                </div>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <Card className="border-0">
                  <CardHeader className="">
                    <Image
                      src="https://picsum.photos/200"
                      className="rounded-lg"
                      width={200}
                      height={200}
                      alt="blog_image"
                    />
                  </CardHeader>
                  <CardContent className="">
                    <h3 className="text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </h3>
                    <div className="space-x-2 mt-4">
                      <p className="inline">Tags : </p>
                      <Button className="h-2 w-16 p-3">Next.js</Button>
                      <Button className="h-2 w-16 p-3">aws</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="col-span-6">
                <Card className="border-0">
                  <CardHeader className="">
                    <Image
                      src="https://picsum.photos/200"
                      className="rounded-lg"
                      width={200}
                      height={200}
                      alt="blog_image"
                    />
                  </CardHeader>
                  <CardContent className="">
                    <h3 className="text-justify">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </h3>
                    <div className="space-x-2 mt-4">
                      <p className="inline">Tags : </p>
                      <Button className="h-2 w-16 p-3">Next.js</Button>
                      <Button className="h-2 w-16 p-3">aws</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-span-6  flex flex-col justify-between">
            {blogs}
          </div>
        </div>
      </div>
    </section>
  );
}

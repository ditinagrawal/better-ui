import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OpenInV0Button } from "@/components/ui/v0-button";
import { publicEnv } from "@/lib/env";
import { Loader2Icon } from "lucide-react";
import { lazy, Suspense, type ReactNode } from "react";

export type Demo = "loading-button/basic";

export function CodePreviewInternal({
  demo,
  children,
}: {
  demo: Demo;
  children: ReactNode;
}) {
  const componentName = demo.split("/")[0];
  const Component = getComponent(componentName, demo.split("/")[1]);

  return (
    <Tabs defaultValue="preview" className="not-content">
      <TabsList className="w-full bg-transparent">
        <TabsTrigger
          value="preview"
          className="flex-grow-0 border-none bg-transparent"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="flex-grow-0 border-none bg-transparent"
        >
          Code
        </TabsTrigger>
        <OpenInV0Button
          url={`${publicEnv.BETTER_UI_URL}/r/${componentName}.json`}
          className="ml-auto"
        />
      </TabsList>
      <Card className="no-scrollbar h-[450px] overflow-y-auto rounded-lg bg-transparent p-0">
        <CardContent className="h-full p-0">
          <TabsContent
            value="preview"
            className="flex h-full items-center justify-center p-4"
          >
            <Suspense
              fallback={<Loader2Icon className="size-16 animate-spin" />}
            >
              <Component />
            </Suspense>
          </TabsContent>
          <TabsContent value="code" className="h-full">
            {children}
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}

function getComponent(component: string, demo: string) {
  return lazy(async () => {
    const module = await import(
      `../../../registry/new-york/examples/${component}/${demo}.tsx`
    );
    const namedExport = Object.keys(module).find(
      (key) => typeof module[key] === "function"
    );
    return {
      default:
        module.default ?? (namedExport ? module[namedExport] : undefined),
    };
  });
}

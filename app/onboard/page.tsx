"use client";

import { useState } from "react";
import { useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Tamil", "Punjabi"];
const feeRanges = ["₹5k-10k", "₹10k-20k", "₹20k+"];

const schema = z.object({
  name: z.string().min(2),
  bio: z.string().min(10),
  location: z.string().min(2),
  categories: z.array(z.string()).min(1),
  languages: z.array(z.string()).min(1),
  feeRange: z.string().min(1),
  image: z.any().optional(),
});

type FormData = z.infer<typeof schema>;

export default function OnboardPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      categories: [],
      languages: [],
      feeRange: "",
      image: null,
    },
  });

  const [preview, setPreview] = useState<string | null>(null);

  function onSubmit(values: FormData) {
    console.log("Form Data:", values);
    alert("Artist submitted successfully!");
    form.reset();
    setPreview(null);
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Artist Onboarding</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Bio */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Bio</FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="Tell us about yourself..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City or Region" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Categories Multi-Select */}
            <FormField
              control={form.control}
              name="categories"
              render={() => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {form.watch("categories").length > 0
                          ? form.watch("categories").join(", ")
                          : "Select categories"}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full space-y-2">
                      {categories.map((cat) => (
                        <FormField
                          key={cat}
                          control={form.control}
                          name="categories"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={cat}
                                className="flex flex-row items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(cat)}
                                    onCheckedChange={(checked) => {
                                      const updated = checked
                                        ? [...field.value, cat]
                                        : field.value.filter((c: string) => c !== cat);
                                      field.onChange(updated);
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{cat}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Languages Multi-Select */}
            <FormField
              control={form.control}
              name="languages"
              render={() => (
                <FormItem>
                  <FormLabel>Languages Spoken</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        {form.watch("languages").length > 0
                          ? form.watch("languages").join(", ")
                          : "Select languages"}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full space-y-2">
                      {languages.map((lang) => (
                        <FormField
                          key={lang}
                          control={form.control}
                          name="languages"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={lang}
                                className="flex flex-row items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(lang)}
                                    onCheckedChange={(checked) => {
                                      const updated = checked
                                        ? [...field.value, lang]
                                        : field.value.filter((l: string) => l !== lang);
                                      field.onChange(updated);
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{lang}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Fee Range */}
            <FormField
              control={form.control}
              name="feeRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fee Range</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full border rounded px-2 py-2">
                      <option value="">Select a range</option>
                      {feeRanges.map((fee) => (
                        <option key={fee} value={fee}>
                          {fee}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Profile Image Upload */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);
                          setPreview(URL.createObjectURL(file));
                        }
                      }}
                    />
                  </FormControl>
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mt-2 rounded w-32 h-32 object-cover"
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Submit Artist Info
            </Button>
          </form>
        </Form>
      </main>
      <Footer />
    </>
  );
}

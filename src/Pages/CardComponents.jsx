"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [copied, setCopied] = React.useState(false);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cardExamples = {
    basicCard: {
      title: "Basic Card",
      code: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <ShadcnUI.CardTitle>Basic Card Title</ShadcnUI.CardTitle>
    <ShadcnUI.CardDescription>You can add a description here that explains the card content.</ShadcnUI.CardDescription>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <p>This is a basic card component that can be used to display various types of content.</p>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter>
    <ShadcnUI.Button variant="outline">Cancel</ShadcnUI.Button>
    <ShadcnUI.Button>Save Changes</ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`,
      component: (
        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <ShadcnUI.CardTitle>Basic Card Title</ShadcnUI.CardTitle>
            <ShadcnUI.CardDescription>
              You can add a description here that explains the card content.
            </ShadcnUI.CardDescription>
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <p>
              This is a basic card component that can be used to display various
              types of content.
            </p>
          </ShadcnUI.CardContent>
          <ShadcnUI.CardFooter className="flex justify-between">
            <ShadcnUI.Button variant="outline">Cancel</ShadcnUI.Button>
            <ShadcnUI.Button>Save Changes</ShadcnUI.Button>
          </ShadcnUI.CardFooter>
        </ShadcnUI.Card>
      ),
    },
    contentCard: {
      title: "Content Card",
      code: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <ShadcnUI.CardTitle>Article Title</ShadcnUI.CardTitle>
    <ShadcnUI.CardDescription>Published on March 7, 2024</ShadcnUI.CardDescription>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="space-y-4">
      <img src="/blog-post.jpg" alt="Article cover" className="w-full h-48 object-cover rounded-md" />
      <p>This is a preview of the article content. Click below to read more.</p>
      <div className="flex items-center space-x-4">
        <ShadcnUI.Badge variant="secondary">Technology</ShadcnUI.Badge>
        <ShadcnUI.Badge variant="secondary">News</ShadcnUI.Badge>
      </div>
    </div>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter>
    <ShadcnUI.Button>Read More</ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`,
      component: (
        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <ShadcnUI.CardTitle>Article Title</ShadcnUI.CardTitle>
            <ShadcnUI.CardDescription>
              Published on March 7, 2024
            </ShadcnUI.CardDescription>
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <div className="space-y-4">
              <img
                src="/blog-post.jpg"
                alt="Article cover"
                className="w-full h-48 object-cover rounded-md"
              />
              <p>
                This is a preview of the article content. Click below to read
                more.
              </p>
              <div className="flex items-center space-x-4">
                <ShadcnUI.Badge variant="secondary">Technology</ShadcnUI.Badge>
                <ShadcnUI.Badge variant="secondary">News</ShadcnUI.Badge>
              </div>
            </div>
          </ShadcnUI.CardContent>
          <ShadcnUI.CardFooter>
            <ShadcnUI.Button>Read More</ShadcnUI.Button>
          </ShadcnUI.CardFooter>
        </ShadcnUI.Card>
      ),
    },
    imageCard: {
      title: "Image Card",
      code: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <img src="/landscape.jpg" alt="Beautiful landscape" className="w-full h-64 object-cover rounded-t-lg" />
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent className="pt-4">
    <ShadcnUI.CardTitle>Scenic Mountain View</ShadcnUI.CardTitle>
    <ShadcnUI.CardDescription className="mt-2">
      Captured during sunrise at Mount Rainier National Park
    </ShadcnUI.CardDescription>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter className="flex justify-between">
    <ShadcnUI.Button variant="ghost" size="sm">
      <i className="far fa-heart mr-2"></i>Like
    </ShadcnUI.Button>
    <ShadcnUI.Button variant="ghost" size="sm">
      <i className="far fa-share-square mr-2"></i>Share
    </ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`,
      component: (
        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <img
              src="/landscape.jpg"
              alt="Beautiful landscape"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent className="pt-4">
            <ShadcnUI.CardTitle>Scenic Mountain View</ShadcnUI.CardTitle>
            <ShadcnUI.CardDescription className="mt-2">
              Captured during sunrise at Mount Rainier National Park
            </ShadcnUI.CardDescription>
          </ShadcnUI.CardContent>
          <ShadcnUI.CardFooter className="flex justify-between">
            <ShadcnUI.Button variant="ghost" size="sm">
              <i className="far fa-heart mr-2"></i>Like
            </ShadcnUI.Button>
            <ShadcnUI.Button variant="ghost" size="sm">
              <i className="far fa-share-square mr-2"></i>Share
            </ShadcnUI.Button>
          </ShadcnUI.CardFooter>
        </ShadcnUI.Card>
      ),
    },
    profileCard: {
      title: "Profile Card",
      code: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader className="text-center">
    <ShadcnUI.Avatar className="w-24 h-24 mx-auto">
      <ShadcnUI.AvatarImage src="/avatar.jpg" alt="User profile" />
      <ShadcnUI.AvatarFallback>JD</ShadcnUI.AvatarFallback>
    </ShadcnUI.Avatar>
    <ShadcnUI.CardTitle className="mt-4">Jane Doe</ShadcnUI.CardTitle>
    <ShadcnUI.CardDescription>Senior Developer</ShadcnUI.CardDescription>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="text-center space-y-4">
      <p>Full-stack developer with a passion for creating beautiful user experiences.</p>
      <div className="flex justify-center space-x-4">
        <ShadcnUI.Button variant="outline" size="icon">
          <i className="fab fa-twitter"></i>
        </ShadcnUI.Button>
        <ShadcnUI.Button variant="outline" size="icon">
          <i className="fab fa-linkedin"></i>
        </ShadcnUI.Button>
        <ShadcnUI.Button variant="outline" size="icon">
          <i className="fab fa-github"></i>
        </ShadcnUI.Button>
      </div>
    </div>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter className="justify-center">
    <ShadcnUI.Button>Connect</ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`,
      component: (
        <ShadcnUI.Card>
          <ShadcnUI.CardHeader className="text-center">
            <ShadcnUI.Avatar className="w-24 h-24 mx-auto">
              <ShadcnUI.AvatarImage src="/avatar.jpg" alt="User profile" />
              <ShadcnUI.AvatarFallback>JD</ShadcnUI.AvatarFallback>
            </ShadcnUI.Avatar>
            <ShadcnUI.CardTitle className="mt-4">Jane Doe</ShadcnUI.CardTitle>
            <ShadcnUI.CardDescription>
              Senior Developer
            </ShadcnUI.CardDescription>
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <div className="text-center space-y-4">
              <p>
                Full-stack developer with a passion for creating beautiful user
                experiences.
              </p>
              <div className="flex justify-center space-x-4">
                <ShadcnUI.Button variant="outline" size="icon">
                  <i className="fab fa-twitter"></i>
                </ShadcnUI.Button>
                <ShadcnUI.Button variant="outline" size="icon">
                  <i className="fab fa-linkedin"></i>
                </ShadcnUI.Button>
                <ShadcnUI.Button variant="outline" size="icon">
                  <i className="fab fa-github"></i>
                </ShadcnUI.Button>
              </div>
            </div>
          </ShadcnUI.CardContent>
          <ShadcnUI.CardFooter className="justify-center">
            <ShadcnUI.Button>Connect</ShadcnUI.Button>
          </ShadcnUI.CardFooter>
        </ShadcnUI.Card>
      ),
    },
    productCard: {
      title: "Product Card",
      code: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <img src="/product.jpg" alt="Product image" className="w-full h-48 object-cover rounded-t-lg" />
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="flex justify-between items-start">
      <div>
        <ShadcnUI.CardTitle>Wireless Headphones</ShadcnUI.CardTitle>
        <ShadcnUI.CardDescription>Premium Audio</ShadcnUI.CardDescription>
      </div>
      <ShadcnUI.Badge variant="secondary">$299.99</ShadcnUI.Badge>
    </div>
    <div className="mt-4 space-y-2">
      <p className="text-sm">High-quality wireless headphones with noise cancellation.</p>
      <div className="flex items-center">
        <div className="flex text-yellow-400">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <span className="ml-2 text-sm text-gray-600">(4.5)</span>
      </div>
    </div>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter>
    <ShadcnUI.Button className="w-full">Add to Cart</ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`,
      component: (
        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <img
              src="/product.jpg"
              alt="Product image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <div className="flex justify-between items-start">
              <div>
                <ShadcnUI.CardTitle>Wireless Headphones</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  Premium Audio
                </ShadcnUI.CardDescription>
              </div>
              <ShadcnUI.Badge variant="secondary">$299.99</ShadcnUI.Badge>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                High-quality wireless headphones with noise cancellation.
              </p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="ml-2 text-sm text-gray-600">(4.5)</span>
              </div>
            </div>
          </ShadcnUI.CardContent>
          <ShadcnUI.CardFooter>
            <ShadcnUI.Button className="w-full">Add to Cart</ShadcnUI.Button>
          </ShadcnUI.CardFooter>
        </ShadcnUI.Card>
      ),
    },
    eventCard: {
      title: "Event Card",
      code: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <div className="flex justify-between items-start">
      <div>
        <ShadcnUI.CardTitle>Tech Conference 2024</ShadcnUI.CardTitle>
        <ShadcnUI.CardDescription>Annual Developer Conference</ShadcnUI.CardDescription>
      </div>
      <ShadcnUI.Badge>Upcoming</ShadcnUI.Badge>
    </div>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <i className="far fa-calendar text-gray-500"></i>
        <span>March 15-17, 2024</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="far fa-clock text-gray-500"></i>
        <span>9:00 AM - 6:00 PM</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-map-marker-alt text-gray-500"></i>
        <span>Convention Center, San Francisco</span>
      </div>
      <ShadcnUI.Separator />
      <div className="flex items-center space-x-2">
        <i className="fas fa-ticket-alt text-gray-500"></i>
        <span>From $299</span>
      </div>
    </div>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter className="flex justify-between">
    <ShadcnUI.Button variant="outline">Learn More</ShadcnUI.Button>
    <ShadcnUI.Button>Register Now</ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`,
      component: (
        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <ShadcnUI.CardTitle>Tech Conference 2024</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  Annual Developer Conference
                </ShadcnUI.CardDescription>
              </div>
              <ShadcnUI.Badge>Upcoming</ShadcnUI.Badge>
            </div>
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <i className="far fa-calendar text-gray-500"></i>
                <span>March 15-17, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="far fa-clock text-gray-500"></i>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-gray-500"></i>
                <span>Convention Center, San Francisco</span>
              </div>
              <ShadcnUI.Separator />
              <div className="flex items-center space-x-2">
                <i className="fas fa-ticket-alt text-gray-500"></i>
                <span>From $299</span>
              </div>
            </div>
          </ShadcnUI.CardContent>
          <ShadcnUI.CardFooter className="flex justify-between">
            <ShadcnUI.Button variant="outline">Learn More</ShadcnUI.Button>
            <ShadcnUI.Button>Register Now</ShadcnUI.Button>
          </ShadcnUI.CardFooter>
        </ShadcnUI.Card>
      ),
    },
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Card Component Examples</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {Object.entries(cardExamples).map(([key, card]) => (
          <div
            key={key}
            className="flex flex-col lg:flex-row gap-4 p-6 border rounded-lg"
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
              {card.component}
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  className="absolute right-2 top-2"
                  onClick={() => copyCode(card.code)}
                >
                  {copied ? (
                    <>
                      <i className="fas fa-check mr-2"></i>Copied!
                    </>
                  ) : (
                    <>
                      <i className="far fa-copy mr-2"></i>Copy Code
                    </>
                  )}
                </ShadcnUI.Button>
                <pre className="p-4 rounded-lg bg-slate-950 text-slate-50 overflow-x-auto">
                  <code>{card.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComponent;
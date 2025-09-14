import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {useIsMobile} from "@/hooks/use-mobile.ts";

function TagList({ title, tags }) {
  return (
    <div>
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-700 text-gray-300 hover:bg-gray-700 cursor-pointer bg-[#293038] text-sm rounded-xl"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" className="w-full h-96 object-cover" alt="" />
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-inter">
          Search for words, phrases and meanings
        </h1>
        <HeroSearch initialValue="" onSearch={onSearch} />
      </div>
    </div>
  );
}

function HeroSearch({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [searchText, setSearchText] = useState(initialValue);

  return (
    <div className="flex items-center bg-[#121417] px-4 py-2 rounded-xl w-full max-w-xl mt-6 shadow-lg">
      <Search className="text-gray-400" />
      <Input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Type to search..."
        aria-label="Search Worctionary"
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 placeholder:font-inter"
      />
      <Button className="bg-blue-500 hover:bg-blue-700 text-white ml-4" onClick={() => onSearch(searchText)}>
        Search
      </Button>
    </div>
  );
}

function Header() {
    const isMobile = useIsMobile()
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.svg" alt="Worctionary Logo" className="w-4 h-4" />
          {!isMobile && <div className="font-inter  text-white font-bold text-lg">Worctionary</div>}
      </div>

      <div className="flex items-center gap-4">
        <div style={{ position: "relative" }}>
              <span className="absolute left-3 top-2">
                <Search className="text-gray-400 text-sm" />
              </span>
          <Input
              aria-label="Search Worctionary"
            type="text"
            placeholder="Search"
            className="pl-11 bg-gray-800 text-gray-400 border-none focus:ring-0 rounded-xl placeholder:text-gray-400 placeholder:font-inter"
          />
        </div>
        <Avatar style={{ width: "32px", height: "32px" }}>
          <AvatarImage src="/task1/avatar.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

const tags = [
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
]

export default function App() {
  return (
    <main className="bg-black/95 min-h-screen text-white">
      <Header />
      <HeroSection />
        <div className="mt-8 px-6 max-w-5xl mx-auto">
            <TagList title="Trending" tags={tags} />
        </div>
        <div className="mt-8 px-6 max-w-5xl mx-auto">
            <TagList title="For you" tags={tags} />
        </div>
    </main>
  );
}

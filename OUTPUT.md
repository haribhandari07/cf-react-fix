## Changes Made


### [App]
1. useState
   - Issue: useState is not needed here.
   - Fix: Removed useState as tag list is usually fetched from api. If it's not fetched from api a plain js array is enough here. Line 103
2. font
   - Issue: Font specified in design in not used
   - Fix: Used `Inter` font that's specified in the design

### [HeroSearch or BoxArear108]
1. useEffect
   - Issue: useEffect is not needed here. Both the useEffects here are useless.
   - Fix: Removed both the useEffect. First useEffect is not needed as we only call the onSearch on Click of Search button.
      Second useEffect is not needed as setting on the search input text can be handled by event handler
2. innerValue
   - Issue: The name innerValue for search input text is vague. 
   - Fix: Changed innerValue to searchText
3. styling
   - Issue: Search button color and the search input background color is not according to the design
   - Fix: Changed search button color and input background color according to the design

### [HeroSection or BoxArea97]
1. Vague Component name
   - Issue: BoxArea97 doesn't what component does
   - Fix: Renamed it to Herosection
2. No alt tag
   - Issue: No alt tag in hero image
   - Added alt="" for accessibility reason


### [Header]
1. Mobile design fix
   - Issue: Displaying both logo and company name in mobile view doesn't look good
   - Fix: Only display logo and hide company name in mobile view
2. Nothing can be typed in search input
   - value of search is provided in Input, so it can't be changed
   - Placeholder of search is used instead of value, so input can be changed
3. Incorrect spelling in logo
   - Issue: Incorrect Spelling in Logo (Wortionary instead of Worctionary),
   - Fix: Worctionary Spelling
4. No alt text in log
   - Issue: No alt text in log
   - Fix: Added meaningful alt text in logo
5. No label in header search
   - Issue: No aria label in search input
   - Fix: Added aria label to header search for better accesssibility
6. PNG image in logo
   - Issue: png image pixelates
   - Fix: Use svg image in logo

### [TagList]
1. Styling (margin, paddings) in tag list
   - Issue: Hardcoded spacing reduces flexibility and forces you to override the styles later. Hardcoding margin/padding for reusable components is a bad idea as spacing can be different according to use case and context
   - Fix: Remove hardcoded margin/padding from TagList and instead wrapped with these spacing padding in App component where TagList is used.

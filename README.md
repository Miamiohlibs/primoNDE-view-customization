# primoNDE-view-customization
customization files for Miami University Libraries Primo NDE view

Initial Notes:
    - [Link to Miami University Libraries' current Primo homepage](https://ohiolink-mu.primo.exlibrisgroup.com/nde/home?vid=01OHIOLINK_MU:MU_NDE26&lang=en)
    - All these customizations are in your customization folder. The customization folder name needs to match your view name. Our current view and folder name at Miami is 01OHIOLINK_MU-MU_NDE26. Substitute your own view name for **[yourview]** token in the file paths below...

## Helpful Documentation

- [ExLibris customization best practices](https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/Go_NDE/Customization_Best_Practices)

## Custom Images

### Favicon

The favicon is located in [yourview] > assets > icons > favicon.ico

### Library Logos

The library logos are in two places — 
1. Our Miami library logo is encoded on the header.html file — **[yourview] > assets > header-footer > header.html**. 
    - The header image in that file is locate4d in [yourview] > assets > images > library-header-logo.png 
    - As this is our own coding, we have control over the file name and location.
The OneSearch logo we made (to replace the Clarivate logo) is also in [yourview] > assets > images > library-logo.png 
This image name is hardcoded into the template so we had to use that location and name.
---

The background image is [yourview] > assets > homepage > homepage_background.svg

I find converting pixel-based images to paths-based SVG text files to be a bit wonky. There are online image-to-SVG converters. I personally used Adobe Illustrator.

I wrote some instructions about this for Hydy at Columbus State last week so I'll copy them in the PS below. (I'll see if I can add it to the Github repo ReadMe page as well.)

---

As to the Primo homepage layout— that's still a bit confusing to me. I managed to get it to work through some additional CSS, but I'm not an Angular developer so I wasn't able to go much further than their set layout. 

Actually, could you share the link your screenshot is from? I found one of their Github repos, but the image you shared doesn't look familiar to me. 

Feel free to holler my way with any follow up questions/clarifications that might be needed.

cheers!
Jerr


PS — here are my notes on the background image.
-----
As to the homepage background image. Here's the entire process as if starting from scratch...
On the Manage Customization Package tab of Discovery > View Configuration, you can download a template file of the Primo customization file.
Inside this folder, the homepage image needs to be placed in the assets > homepage folder and must be named homepage_background.svg to work.
 Screenshot 2026-02-12 at 5.32.54 PM.png
For the image itself, I started with a normal photograph of our library. In Photoshop, I...
Reduced the image size to 1400px across
Cropped the height to match the sample image ratio.
Played with the Photoshop filters to give it a painterly look. 
Saved that as a png file
I then opened the image in Illustrator where I was able to export it as an SVG file. I checked the minimize checkbox when saving to reduce load time.
My first attempt took too long to load so that's when I reduced the image size to 1400px. I'm still not quite happy with the load time, but it's a lot better than what it was.
I placed the image in the homepage folder and renamed it homepage_background.svg to match the required file name.
Uploading the customization file
Compress the entire view folder
If you're on Windows, use 7-Zip
If you're on a Mac, you'll likely need to compress it with a command line prompt. Substitute your view code in for mine here...
zip -r 01OHIOLINK_MU-MU_NDE26.zip 01OHIOLINK_MU-MU_NDE26 -x "*.DS_Store"
This method is needed because the built-in Mac compression method leaves the hidden .DS_Store file in the zip and Primo can't process it.
Upload the resulting zip and hopefully you'll see a prompt that it was successfully uploaded.
Then hit the Save button at the top right to implement the new changes.
See the changes...
Force-reload (shift-command-R or shift-control-R) your Primo homepage for the new image to kick in.
If it's not working, try the following in order...
Try a second force reload.
Try uploading and saving the config folder a second time. (Occasionally I've not had an upload not take, but no clue why). 
Double check that the file name and file type are correct. 
If it's still not working I read the documentation for the umpteenth time or scream at the sky.
# primoNDE-view-customization
customization files for Miami University Libraries Primo NDE view

Initial Notes:
    - [Link to Miami University Libraries' current Primo homepage](https://ohiolink-mu.primo.exlibrisgroup.com/nde/home?vid=01OHIOLINK_MU:MU_NDE26&lang=en)
    - All these customizations are in your customization folder. The customization folder name needs to match your view name. Our current view and folder name at Miami is 01OHIOLINK_MU-MU_NDE26. Substitute your own view name for **[yourview]** token in the file paths below...

## Helpful Documentation

- [ExLibris customization best practices](https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/Go_NDE/Customization_Best_Practices)

- [Adding LibChat to Primo](https://developers.exlibrisgroup.com/blog/embedding-springshare-libchat-widget-into-the-primo-nu/)

## Custom Images

### Favicon

The favicon is located in the icons folder 
    - [yourview] > assets > icons > favicon.ico

### Library Logos

The library logos are in two places — 
1. Our Miami library logo is encoded in the header.html file in the header-footer folder.
    - **[yourview] > assets > header-footer > header.html**.
    - In turn, the header image from this file are in the images folder.
    - **[yourview] > assets > images > library-header-logo.png**
    - We can control the file name and image location as it's our own coding.
2. The OneSearch logo made to replace the Clarivate logo is also in images folder.
    - **[yourview] > assets > images > library-logo.png**
    - This image name is hardcoded into the template so we need to use this location and file name.

### Background image

The background image is located in the homepage folder.
    - **[yourview] > assets > homepage > homepage_background.svg**

The file name and format type are hardcoded in the Primo template so matching is necessary. I find converting pixel-based images to paths-based SVG text files a bit wonky. There are online image-to-SVG converters. I personally used Adobe Illustrator.

I wrote some instructions for another library and include them below.

## Detailed instructions for a new background image from scratch

- On the Manage Customization Package tab of **Discovery > View Configuration**, you can download a copy of your current Primo customization folder.
- Inside this folder, the homepage image needs to be placed in the **assets > homepage** folder and must be named *homepage_background.svg* to work properly.

### Creating the background image

- To create the SVG, we started with a digital photograph of our library. In Photoshop, we then...
    1. Reduced the image size to 1400px across
    2. Cropped the height to match the sample image ratio.
    3. Played with the Photoshop filters to give it a painterly look. 
    4. Saved the resulting image as a .png file
    5. Opened the image in Illustrator where I was able to export it as an SVG file. I checked the minimize checkbox when saving to reduce load time.
    6. My first attempt took too long to load so that's when I reduced the image size to 1400px. I'm still not quite happy with the load time, but it's a lot better than what it was.
    7. Placed the image in the homepage folder and renamed it homepage_background.svg to match the required file name.

### Uploading customization file

- Compress the entire view folder
    1. If you're on Windows, use 7-Zip
    2. If you're on a Mac, you'll likely need to compress it with a command line prompt. Substitute your view code in for mine here...
    3. **zip -r 01OHIOLINK_MU-MU_NDE26.zip 01OHIOLINK_MU-MU_NDE26 -x "*.DS_Store"**
    4. This command is needed to delete the hidden .DS_Store files Mac automatically includes in all folders.
    5. If these files are not deleted before zip compression, Primo will be unable to process the customizataion package and the upload will fail.
- Upload the resulting zip file and you'll ideally see a prompt that it was successfully uploaded.
- Then hit the Save button at the top right to implement the new changes.

#### See the changes...
- Return to Primo and force-reload (shift-command-R or shift-control-R) your homepage to see if the new image kicks in.
- If it's not working, try the following in order...
    - Try a second force reload.
    - Try uploading and saving the config folder a second time. (Occasionally I've not had an upload not take, but no clue why). 
    - Double check that the file name and file type are correct and that files are correctly formatted.
- Still not working? 
    - Read the documentation for the umpteenth time and/or scream at the sky.
    - Seriously, after 2-3 tries, I'll often reach out to someone to see if they can see the issue I'm missing. 
    - In one case, I saw an SVG that missized to 140px across instead of 1400px across so it did not appear. A new attempt at creating the SVG at 1400px succeeded and the background image appeared.
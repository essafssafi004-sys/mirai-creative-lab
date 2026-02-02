Place your site audio file in this folder (e.g., `fashion-killa.mp3`) or change the path passed into `AutoPlayAudio` (default is `/src/assets/music/fashion-killa.mp3`).

Notes:
- Browsers usually block autoplay with sound. The component will try to play on load, and if blocked it shows a small Play button in the bottom-left so users can start audio.
- Keep file sizes reasonable to avoid long load times (use ~128-192 kbps MP3 or WebM/OGG for smaller files).
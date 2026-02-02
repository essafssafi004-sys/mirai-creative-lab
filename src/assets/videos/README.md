Place your intro/hero video files here and name at least one `intro.mp4` (or update the `videoSrc` prop passed to the `Preloader`).

Recommendations:
- Supported formats: MP4 (H.264), WebM (VP9), OGG; provide multiple formats for best browser coverage.
- Keep the file small (use ~720p and bitrate around 2.5-4 Mbps for a good balance).
- Use `poster.jpg` if you want a fallback image while the video loads.

Example:
- `src/assets/videos/intro.mp4`
- `src/assets/videos/intro.webm`
- `src/assets/videos/poster.jpg`

To change the video path, edit `src/pages/Index.tsx` where `<Preloader videoSrc="/src/assets/videos/intro.mp4" />` is used.
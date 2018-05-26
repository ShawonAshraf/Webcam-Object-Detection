# Object detection in Web Browser
> Using webcam/mobile camera

## Slow or can't detect?
Whereas typical object detection models run in powerful servers, this one runs on your device. So if your device is slow, it will take time.

## Web Links
- Github : https://github.com/ShawonAshraf/Webcam-Object-Detection
- Gitlab : https://gitlab.com/ShawonAshraf/tfjs-object-detection

## Model in use
Using [Tiny YOLO](https://pjreddie.com/darknet/yolo/), an ML model that's been converted to work in Tensorflow.js

## Dependencies
*Check the package.json file*.

## Running on local machine
- Clone the repo
- `cd` into the directory and run the following commands
```bash
npm install
```
```bash
npm run run-local
```
- Open your web browser and navigate to `http://localhost:3000`
- Allow browser to use your webcam.

## Acknowledgements

- [Tiny YOLO TFJS](https://github.com/ModelDepot/tfjs-yolo-tiny-demo) 
- [Siraj Raval's YouTube Video on Tensorflow.js](https://youtu.be/Nc8kZABv-KE)
- [Deep learning in your browser: A brisk guide by Mike Shi on Medium](https://towardsdatascience.com/deep-learning-in-your-browser-a-brisk-guide-ca06c2198846)

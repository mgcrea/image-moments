# export PYTHONPATH=/usr/local/lib/python2.7/site-packages:$PYTHONPATH

import cv2
import json
im = cv2.imread("test/fixtures/sample.png", cv2.CV_LOAD_IMAGE_GRAYSCALE)

print json.dumps(im.tolist())
#print cv2.moments(im)

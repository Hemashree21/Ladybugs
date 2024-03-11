import os

import cvzone
import cv2
from cvzone.PoseModule import PoseDetector

cap = cv2.VideoCapture("Resources/Videos/2.mp4")
detector = PoseDetector()

shirtFolderPath = "Resources/Shirts"
listShirts = os.listdir(shirtFolderPath)
print(listShirts)

while True:
    success, img = cap.read()
    img = detector.findPose(img)
    # img = cv2.flip(img,1)

    lmList, bboxInfo = detector.findPosition(img, bboxWithHands=False, draw=False)
    if lmList:
        #center = bboxInfo["center"]
        #cv2.circle(img, center, 5, (255,0,255), cv2.FILLED)
        pass
        lm11 = lmList[13][1:3]
        lm12 = lmList[12][1:3]
        print(lmList[13][1:3])
        imgShirt = cv2.imread(os.path.join(shirtFolderPath, listShirts[2]), cv2.IMREAD_UNCHANGED)
        #imgShirt = cv2.resize(imgShirt, (0,0),None,0.5,0.5)
        img = cvzone.overlayPNG(img, imgShirt, lm11)
        '''try:
            
        except:
            pass'''


    cv2.imshow("Image", img)
    cv2.waitKey(1)
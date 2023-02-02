from PIL import Image, ImageEnhance
from pytesseract import *
import re

global LEFT, RIGHT, TOP , BOTTOM  
LEFT, RIGHT, TOP , BOTTOM = 740, 1180, 470, 900



img = Image.open("src/assets/hellcleared.png").resize((1920,1080)).crop((LEFT,TOP,RIGHT,BOTTOM))
img2 = Image.open("src/assets/hellcleared2.png").resize((1920,1080)).crop((LEFT,TOP,RIGHT,BOTTOM))

text = image_to_string(img, lang="kor").strip().split("\n")
text2 = image_to_string(img2, lang="kor").strip().split("\n")


print(text)
print(text2)

print("클리어 되셨습니다!" if ("클리어" or "성공") else "클리어를 인식할 수 없습니다.")

    



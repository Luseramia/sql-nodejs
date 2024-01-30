# ใช้ base image ของ Node.js ที่ต้องการ (ตัวอย่าง: Node.js 14)
FROM node:14

# กำหนดพื้นที่ทำงาน
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยัง container
COPY package*.json ./

# ติดตั้ง dependencies
RUN ["npm", "i"]

# คัดลอกไฟล์ทั้งหมดจากโฟลเดอร์ปัจจุบันไปยัง container
COPY . .

# กำหนด port ที่แอปพลิเคชันใช้
EXPOSE 5000

# คำสั่งที่ให้ container เริ่มต้นแอปพลิเคชัน
CMD ["npm", "start"]

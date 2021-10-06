#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo -e "\033[1;33mJAWAB PERTANYAAN DULU APAKAH LU BOCIL ATAU BUKAN\033[0m\n"
echo -e "\033[1;33mEROR KAN GAPAPA BIARIN AJA GAK NGARUH KO\033[0m\n"
echo -e "\033[1;36mSiapa Namamu?\033[0m"
read namauser
echo -e "\033[1;36mTinggal Dimana?\033[0m"
read tinggaluser
echo -e "\033[1;36mUmur Berapa?\033[0m"
read umuruser
clear
if [ $umuruser -ge 11 ]
then
echo -e "\033[1;32mAnda Mencukupi Umur Untuk Menggunakan Fernazer Bot\nWelcome Gunakan Fernazer Bot Dengan Bijak Dan Tidak Menjual Belikan Script Fernazer Bot\033[0m"
else
echo -e "\033[1;31mAnda Belum Mencukupi Umur Untuk Menggunakan Fernazer Bot\nHayo Ijin Untuk Menggunakan Fernazer Bot Dengan Bijak Dan Tidak Menjual Belikan Script Self-Fernazer\033[0m"
fi
echo -e "\n\033[1;34m[ Fernazer ]\033[0m"
echo -e "\033[1;35mReport Bug\033[0m"
echo "https://wa.me/6281328139682"
echo -e "\033[1;35mGithub\033[0m"
echo "https://gitbub.com/Fernazer"
echo -e "\033[1;35mYouTube Channel\033[0m"
echo "https://youtube.com/channel/UCndftoBQ60goY_fGTMaXGnA"
echo -e "\n\033[1;34m[ INFO ]\033[0m"
echo -e "\033[1;35mNama : \033[0m""$namauser"
echo -e "\033[1;35mUmur : \033[0m""$umuruser"
echo -e "\033[1;35mAsal : \033[0m""$tinggaluser\n"
echo -e "\033[1;33mFernazer BOT BERHASIL DI INSTALL KETIK node Fernazer UNTUK MENJALANKAN Fernazer Botz\033[0m"
echo -e "\033[1;33mQr Gak Muncul ? Hapus fernazer.json di mc! \033[0m\n"
echo -e "\033[1;33mCaranya Ketik pkg install mc\033[0m"
echo -e "\033[1;33mKetik mc\033[0m"
echo -e "\033[1;33mcari file fernazer.json, pencet\033[0m"
echo -e "\033[1;33mhapus ketik ALT 8, keluar ketik ALT 0\033[0m"
echo -e "\033[1;35mberes, langsung ketik node Fernazer\033[0m"

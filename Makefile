
run: run-android run-ios

run-android:
	cd app && npm run android

run-ios:
	cd app && npm run ios --simulator="iPhone 11 Pro Max"

server:
	. pipenv shell && python manage.py runserver 192.168.88.253:8000
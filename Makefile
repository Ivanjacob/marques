
run: run-android run-ios

run-android:
	cd app && npm run android

run-ios:
	cd app && npm run ios --simulator="iPhone 11 Pro Max"

server:
	. pipenv shell && python manage.py runserver 127.0.0.1:8000
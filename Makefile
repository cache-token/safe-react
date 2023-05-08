APP_COMPOSE   	:= deployment/docker-compose.yml

app.up:
	docker-compose -f ${APP_COMPOSE} build && docker-compose -f ${APP_COMPOSE} up -d;

app.down:
	docker-compose -f ${APP_COMPOSE} down;
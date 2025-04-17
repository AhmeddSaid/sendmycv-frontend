.PHONY: build-%-development
build-%-development:
	@echo "Building development environment for app '$*'..."
	docker compose -f docker/development/docker-compose.yml build

.PHONY: start-%-development
start-%-development:
	@echo "Starting development environment for app '$*'..."
	docker compose -f docker/development/docker-compose.yml up -d

.PHONY: stop-%-development
stop-%-development:
	@echo "Stopping development environment for app '$*'..."
	docker compose -f docker/development/docker-compose.yml down --volumes --remove-orphans

.PHONY: logs-%-development
logs-%-development:
	@echo "Tailing development environment logs for app '$*'..."
	docker compose -f docker/development/docker-compose.yml logs -f

.PHONY: healthcheck-%-development
healthcheck-%-development:
	@echo "Running health check for development environment for app '$*'..."
	docker compose -f docker/development/docker-compose.yml ps

.PHONY: build-%-staging
build-%-staging:
	@echo "Building staging environment for app '$*'..."
	docker compose -f docker/staging/docker-compose.yml build

.PHONY: start-%-staging
start-%-staging:
	@echo "Starting staging environment for app '$*'..."
	docker compose -f docker/staging/docker-compose.yml up -d

.PHONY: stop-%-staging
stop-%-staging:
	@echo "Stopping staging environment for app '$*'..."
	docker compose -f docker/staging/docker-compose.yml down --volumes --remove-orphans

.PHONY: logs-%-staging
logs-%-staging:
	@echo "Tailing staging environment logs for app '$*'..."
	docker compose -f docker/staging/docker-compose.yml logs -f

.PHONY: healthcheck-%-staging
healthcheck-%-staging:
	@echo "Running health check for staging environment for app '$*'..."
	docker compose -f docker/staging/docker-compose.yml ps

.PHONY: build-%-production
build-%-production:
	@echo "Building production environment for app '$*'..."
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-%-production
start-%-production:
	@echo "Starting production environment for app '$*'..."
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-%-production
stop-%-production:
	@echo "Stopping production environment for app '$*'..."
	docker compose -f docker/production/docker-compose.yml down --volumes --remove-orphans

.PHONY: logs-%-production
logs-%-production:
	@echo "Tailing production environment logs for app '$*'..."
	docker compose -f docker/production/docker-compose.yml logs -f

.PHONY: healthcheck-%-production
healthcheck-%-production:
	@echo "Running health check for production environment for app '$*'..."
	docker compose -f docker/production/docker-compose.yml ps

.PHONY: clean-secrets
clean-secrets:
	@echo "Cleaning up Docker secrets..."
	rm -rf ./secrets/*

.PHONY: prune
prune:
	@echo "Pruning unused Docker resources..."
	docker system prune -f --volumes

.PHONY: healthcheck
healthcheck:
	@echo "Running health check for all services..."
	docker compose ps

.PHONY: restart
restart:
	@echo "Restarting all services..."
	docker compose down --volumes --remove-orphans && docker compose up -d
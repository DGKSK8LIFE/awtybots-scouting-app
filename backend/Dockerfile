FROM golang:1.15 

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod tidy
RUN go mod download

COPY . . 

EXPOSE 8080 

CMD go run main.go
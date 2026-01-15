import azure.functions as func

app = func.FunctionApp()
@app.route(route="test", auth_level=func.AuthLevel.ANONYMOUS, methods=[func.HttpMethod.GET])
def test(req: func.HttpRequest) -> func.HttpResponse:
    return func.HttpResponse("Hello\ntoto\n", mimetype="text/plain")


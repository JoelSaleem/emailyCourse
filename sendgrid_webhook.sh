function localtunnel {
 lt --subdomain afsqjaxfkxafkafhjrte --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

# chmod +x sendgrid_webhook.sh
# ngrok http 5000

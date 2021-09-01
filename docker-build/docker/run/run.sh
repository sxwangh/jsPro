cmd="docker-compose -f docker-compose.yaml up --force-recreate -d aca-manage-ui"
echo $cmd
eval $cmd

docker run -itd -p 8688:80 --env OPEN_API='物理机ip:8687' --env HTTP_PORT='8688'  --restart=always --name="aca-manage-ui" iregistry.baidu-int.com/acg-acloud/aca-manage-ui:1289d72-20210831-2019
docker run -itd -p 8688:80 --env OPEN_API='物理机ip:8687' --env HTTP_PORT='8688'  --restart=always --name="aca-manage-ui" iregistry.baidu-int.com/acg-acloud/aca-manage-ui:1289d72-20210901-1608

物理机ip:8688 --- 访问地址

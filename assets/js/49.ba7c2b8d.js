(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{363:function(e,t,a){"use strict";a.r(t);var s=a(3),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rabbitmq实现延时队列-拓展rabbitmq-delayed-message-exchange插件实现不等时延迟队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq实现延时队列-拓展rabbitmq-delayed-message-exchange插件实现不等时延迟队列"}},[e._v("#")]),e._v(" RabbitMQ实现延时队列 + 拓展rabbitmq_delayed_message_exchange插件实现不等时延迟队列")]),e._v(" "),t("h1",{attrs:{id:"通过-ttl-死信队列-实现延时队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-ttl-死信队列-实现延时队列"}},[e._v("#")]),e._v(" 通过 TTL+死信队列 实现延时队列")]),e._v(" "),t("p",[e._v("TTL: 生存时间值")]),e._v(" "),t("p",[e._v("目前有两种, 一种对消息设置, 一种对队列设置")]),e._v(" "),t("ol",[t("li",[e._v("对队列设置, 队列中所有消息的过期时间都是相同的, 队列先入先出, 因为前面肯定是先过期的,没有问题")]),e._v(" "),t("li",[e._v("对消息设置过期时间, 因为队列先入先出原则, 只有当前消息被取出才会判断下一个消息是否过期 举例: 先放入20S过期的消息A,再放入10S过期的消息B, 理想状态是 B 先过期被转发消费了, 然后 A 过期转发被消费 实际情况是: A在队列头一致堵着 , 当过期时间到了, A 被转发, 这时才会判断 B 的过期时间")]),e._v(" "),t("li",[e._v("如果同时对队列和消息设置了过期时间, 那么根据小的值判断过期")])]),e._v(" "),t("p",[e._v("当一个消息过期就会变为死信, 我们可以通过设置死信交换机和路由键, 将死信发到指定的队列, 也就是死信队列 ; "),t("strong",[e._v("这样只要我们监听死信队列进行消费, 从而实现延时效果")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/other/image-ba0deb43fc464c41bbd679f43dfce994.png",alt:"/img/other/image-ba0deb43fc464c41bbd679f43dfce994.png"}})]),e._v(" "),t("p",[e._v("image.png")]),e._v(" "),t("p",[t("strong",[e._v("所以个人认为通过TTL的方式做延时队列, 只适合过期时间相同的情况 , 比如订单待支付时间都是30分钟等等, 所以下面例子中以队列设置TTL为主, 消息TTL的代码被注释了, 可以自己打开试试")])]),e._v(" "),t("p",[t("strong",[e._v("下面demo中也包含了使用插件的代码, 不过不多如果不使用插件的方式就删掉好了 ,搜索“拓展插件后使用” 就找到了")])]),e._v(" "),t("h1",{attrs:{id:"通过拓展插件实现延时队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过拓展插件实现延时队列"}},[e._v("#")]),e._v(" 通过拓展插件实现延时队列")]),e._v(" "),t("p",[e._v("插件对rabbitmq的版本有限制, 具体可以看github上的说明")]),e._v(" "),t("h2",{attrs:{id:"安装插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[e._v("#")]),e._v(" 安装插件")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("rabbitmq-delayed-message-exchange"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("因为我是docker部署,所以是docker命令, linux直接cp")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker cp 插件文件 容器名:/plugins\n")])])]),t("p",[e._v("进入容器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker exec -it 容器名 bash\n")])])]),t("p",[e._v("查看插件列表")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rabbitmq-plugins list\n")])])]),t("p",[e._v("启用插件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rabbitmq-plugins enable rabbitmq_delayed_message_exchange\n")])])]),t("p",[e._v("linux的可能得重启")]),e._v(" "),t("p",[e._v("重新查看一下插件列表,如果前面中括号有个 e* 那就是ok了")]),e._v(" "),t("p",[e._v("代码实例在下面, 不过和TTL的混在一起了…")]),e._v(" "),t("p",[e._v("和普通的改动点有两处")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("配置类中声明交换机时,type指定x-delayed-message")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@BeanCustomExchange messageDelayedDirect() {    Map<String, Object> args = new HashMap<>();    //这里指定了direct模式    args.put("x-delayed-type", "direct");    return new CustomExchange(交换机的名称,"x-delayed-message",true, false,args);}\n')])])])]),e._v(" "),t("li",[t("p",[e._v("发送消息时,需要通过header配置过期时间")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('rabbitTemplate.convertAndSend(RabbitMQEnum.DELAYED_MESSAGE_COMBINATION.getExchange(), RabbitMQEnum.DELAYED_MESSAGE_COMBINATION.getRouteKey(), msg, message -> {                // 设置延迟毫秒值 是setHeader, 以x-delay为key                message.getMessageProperties().setHeader("x-delay",String.valueOf(messageContent.getDelay()*1000));                return message;            },correlationData);\n')])])])])]),e._v(" "),t("h1",{attrs:{id:"demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),t("h2",{attrs:{id:"pom依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pom依赖"}},[e._v("#")]),e._v(" pom依赖")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!--        主要的依赖--\x3e<dependency>    <groupId>org.springframework.boot</groupId>    <artifactId>spring-boot-starter-amqp</artifactId></dependency>\x3c!--        也只是消息体json转换时用到了,如果有就不用加了--\x3e<dependency>    <groupId>cn.hutool</groupId>    <artifactId>hutool-all</artifactId>    <version>5.6.3</version></dependency><dependency>    <groupId>org.projectlombok</groupId>    <artifactId>lombok</artifactId>    <version>RELEASE</version>    <scope>compile</scope></dependency>\n")])])]),t("h2",{attrs:{id:"application-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-yml"}},[e._v("#")]),e._v(" application.yml")]),e._v(" "),t("p",[e._v("根据自己的情况填写")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("spring:  rabbitmq:    host: 自己rabbitmq的ip    port: 5672    username: guest    password: guestserver:  port: 8765\n")])])]),t("h2",{attrs:{id:"静态常量、枚举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态常量、枚举"}},[e._v("#")]),e._v(" 静态常量、枚举")]),e._v(" "),t("p",[e._v("静态常量放的都是交换机和队列的name")]),e._v(" "),t("p",[e._v("枚举里面是根据不同的绑定情况对交换机、队列、路由键的组合")]),e._v(" "),t("p",[e._v("自己用的方便, 单独在代码里面写也不影响")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('/** * 存放交换机和队列名称 */public class RabbitMqContent {    /**     * 普通消息通知队列名称     */    public static final String MESSAGE_QUEUE_NAME="message.ordinary.queue";    /**     * ttl(延时)消息通知队列名称     */    public static final String MESSAGE_TTL_QUEUE_NAME="message.ttl.queue";    /**     * ttl(延时)消息通知队列 过期时间 毫秒     */    public static final int MESSAGE_TTL_QUEUE_TTL=10*1000;    /**     * 普通交换机名称 direct模式     */    public static final String ORDINARY_DIRECT_EXCHANGE_NAME="message.ordinary.direct.exchange";    /**拓展插件后使用     * Delayed延时交换机名称 direct模式     */    public static final String DELAYED_DIRECT_EXCHANGE_NAME="message.Delayed.direct.exchange";}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/** * 组合枚举 */public enum RabbitMQEnum {    /**     * 普通消息通知组合  普通交换机 普通队列     */    ORDINARY_MESSAGE_COMBINATION(RabbitMqContent.ORDINARY_DIRECT_EXCHANGE_NAME, RabbitMqContent.MESSAGE_QUEUE_NAME, RabbitMqContent.MESSAGE_QUEUE_NAME),    /**     * 延时消息组合   普通交换机  延时队列     */    TTL_MESSAGE_COMBINATION(RabbitMqContent.ORDINARY_DIRECT_EXCHANGE_NAME, RabbitMqContent.MESSAGE_TTL_QUEUE_NAME, RabbitMqContent.MESSAGE_TTL_QUEUE_NAME),    /**拓展插件后使用     * 插件实现延时交换机   延迟交换机  普通队列     */    DELAYED_MESSAGE_COMBINATION(RabbitMqContent.DELAYED_DIRECT_EXCHANGE_NAME, RabbitMqContent.MESSAGE_QUEUE_NAME, RabbitMqContent.MESSAGE_QUEUE_NAME);    /**     * 交换机名称     */    private String exchange;    /**     * 队列名称     */    private String queue;    /**     * 路由键     */    private String routeKey;    RabbitMQEnum(String exchange, String name, String routeKey) {        this.exchange = exchange;        this.queue = name;        this.routeKey = routeKey;    }    public String getExchange() {        return exchange;    }    public void setExchange(String exchange) {        this.exchange = exchange;    }    public String getQueue() {        return queue;    }    public void setQueue(String name) {        this.queue = name;    }    public String getRouteKey() {        return routeKey;    }    public void setRouteKey(String routeKey) {        this.routeKey = routeKey;    }}\n")])])]),t("h2",{attrs:{id:"config配置类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config配置类"}},[e._v("#")]),e._v(" config配置类")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Configurationpublic class RabbitMqConfiguration {    /*=====================>声明交换机<=====================*/    /**     * 普通消息交换机     *     * @return     */    @Bean    DirectExchange messageDirect() {        return ExchangeBuilder                .directExchange(RabbitMqContent.ORDINARY_DIRECT_EXCHANGE_NAME)                .durable(true)                .build();    }    /**拓展插件后使用     * 使用插件实现的延迟交换机     *     * @return     */    @Bean    CustomExchange messageDelayedDirect() {        Map<String, Object> args = new HashMap<>();        args.put("x-delayed-type", "direct");        return new CustomExchange(RabbitMqContent.DELAYED_DIRECT_EXCHANGE_NAME,"x-delayed-message",true, false,args);    }    /*======================>声明队列<======================*/    /**     * 普通消息队列配置     *     * @return     */    @Bean    public Queue messageQueue() {        return QueueBuilder.durable(RabbitMqContent.MESSAGE_QUEUE_NAME).build();    }    /**     * TTL消息队列配置     *     * @return     */    @Bean    Queue messageTtlQueue() {        return QueueBuilder                .durable(RabbitMqContent.MESSAGE_TTL_QUEUE_NAME)                //配置到期后转发到的交换机和路由key, 也就是实际要转发到哪里  这里用 普通消息组合 去消费                .deadLetterExchange(RabbitMQEnum.ORDINARY_MESSAGE_COMBINATION.getExchange())                .deadLetterRoutingKey(RabbitMQEnum.ORDINARY_MESSAGE_COMBINATION.getRouteKey())                //对队列设置过期时间,如果要只对消息设置过期时间,去掉下面这行                .ttl(RabbitMqContent.MESSAGE_TTL_QUEUE_TTL)                .build();    }    /*======================>绑定队列和交换机<======================*/    /**     * 普通队列和普通交换机的绑定-routekey     *     * @param messageDirect 消息中心交换配置     * @param messageQueue  消息中心队列     * @return     */    @Bean    Binding messageBinding(DirectExchange messageDirect, Queue messageQueue) {        return BindingBuilder                .bind(messageQueue)                .to(messageDirect)                .with(RabbitMQEnum.ORDINARY_MESSAGE_COMBINATION.getRouteKey());    }    /**     * ttl延时队列和普通交换机的绑定-routekey     *     * @param messageTtlQueue     * @param messageDirect     * @return     */    @Bean    public Binding messageTtlBinding(Queue messageTtlQueue, DirectExchange messageDirect) {        return BindingBuilder                .bind(messageTtlQueue)                .to(messageDirect)                .with(RabbitMQEnum.TTL_MESSAGE_COMBINATION.getRouteKey());    }    /**拓展插件后使用     * 普通消息队列和Delayed延迟交换机的绑定-routekey     *     * @param messageQueue     * @param messageDelayedDirect     * @return     */    @Bean    public Binding messageDelayedBinding(Queue messageQueue, CustomExchange messageDelayedDirect) {        return BindingBuilder                .bind(messageQueue)                .to(messageDelayedDirect)                .with(RabbitMQEnum.DELAYED_MESSAGE_COMBINATION.getRouteKey()).noargs();    }}\n')])])]),t("h2",{attrs:{id:"消息实体类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息实体类"}},[e._v("#")]),e._v(" 消息实体类")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Datapublic class MessagePojo implements Serializable {    //延迟时间    private int delay;    //消息体    private Map<String, Object> params;    //创建时间    private String createTime;    //消息id    private String messageId;}\n")])])]),t("h2",{attrs:{id:"生产者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产者"}},[e._v("#")]),e._v(" 生产者")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Slf4j@Componentpublic class MessageProvider implements RabbitTemplate.ConfirmCallback {    /**     * RabbitMQ 模版消息实现类     */    protected RabbitTemplate rabbitTemplate;    public MessageProvider(RabbitTemplate rabbitTemplate){        this.rabbitTemplate = rabbitTemplate;        this.rabbitTemplate.setMandatory(true);        this.rabbitTemplate.setConfirmCallback(this);    }    private String msgPojoStr;    /**     * 使用ttl延时消息组合发送     * @param messageContent     */    public void sendMessage(MessagePojo messageContent) {        if (messageContent != null){            messageContent.setMessageId(UUID.randomUUID().toString());            messageContent.setCreateTime(LocalDateTime.now().toString());            String msg = JSONUtil.toJsonStr(messageContent);            msgPojoStr = msg;            log.info("通过{}队列延时{}秒写入{}队列，消息内容：{}", RabbitMQEnum.TTL_MESSAGE_COMBINATION.getQueue(), RabbitMqContent.MESSAGE_TTL_QUEUE_TTL/1000, RabbitMQEnum.ORDINARY_MESSAGE_COMBINATION.getQueue(), msg);            CorrelationData correlationData = new CorrelationData(messageContent.getMessageId());            /*TTL有两种,一种对消息设置, 一种对队列设置             1. 对队列设置, 所有的消息的过期时间都是相同的, 所以队列先入先出, 没有问题 , 因为前面肯定是先过期的             2. 对消息设置过期时间, 因为队列先入先出原则, 只有当前面的消息被取出才会判断当前消息是否过期                举例: 先放入20S过期的消息A,再放入10S过期的消息B, 理想状态是 B 先过期被转发消费了, 然后 A 过期转发被消费                实际情况是 A在队列头一致堵着 , 当过期时间到了, A 被转发, 这时才会判断 B 的过期时间             3. 如果同时对队列和消息设置了过期时间, 那么根据小的值判断过期             */            //消息发送到交换机            rabbitTemplate.convertAndSend(RabbitMQEnum.TTL_MESSAGE_COMBINATION.getExchange(), RabbitMQEnum.TTL_MESSAGE_COMBINATION.getRouteKey(), msg,correlationData);            //如果你想测试只对消息设置过期时间,可以注调上一行,将下面这段代码放开, 然后将RabbitMqConfiguration中messageTtlQueue的ttl注调 记得改一下上面log输出的延时时长的取值            /*rabbitTemplate.convertAndSend(RabbitMQEnum.TTL_MESSAGE_COMBINATION.getExchange(), RabbitMQEnum.TTL_MESSAGE_COMBINATION.getRouteKey(), msg, message -> {                // 设置延迟毫秒值                message.getMessageProperties().setExpiration(String.valueOf(messageContent.getDelay()*1000));                return message;            },correlationData);*/        }else {            log.warn("消息内容为空！！！！！");        }    }    /**拓展插件后使用     * 使用延时交换机发送延迟消息     * @param messageContent     */    public void sendDelayedMessage(MessagePojo messageContent) {        if (messageContent != null){            messageContent.setMessageId(UUID.randomUUID().toString());            messageContent.setCreateTime(LocalDateTime.now().toString());            String msg = JSONUtil.toJsonStr(messageContent);            msgPojoStr = msg;            log.info("通过延时交换机延时{}秒写入消息队列：{}，消息内容：{}", messageContent.getDelay(), RabbitMQEnum.DELAYED_MESSAGE_COMBINATION.getQueue(), msg);            // 执行发送消息到指定队列            CorrelationData correlationData = new CorrelationData(messageContent.getMessageId());            rabbitTemplate.convertAndSend(RabbitMQEnum.DELAYED_MESSAGE_COMBINATION.getExchange(), RabbitMQEnum.DELAYED_MESSAGE_COMBINATION.getRouteKey(), msg, message -> {                // 设置延迟毫秒值 是setHeader, 以x-delay为key                message.getMessageProperties().setHeader("x-delay",String.valueOf(messageContent.getDelay()*1000));                return message;            },correlationData);        }else {            log.warn("消息内容为空！！！！！");        }    }    /**     * 发送确认     */    @Override    public void confirm(CorrelationData correlationData, boolean b, String s) {        System.out.println(" 回调id:" + correlationData);        if (b) {            System.out.println(msgPojoStr+":消息发送成功");        } else {            log.warn(msgPojoStr+":消息发送失败:" + s);        }    }}\n')])])]),t("h2",{attrs:{id:"消费者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者"}},[e._v("#")]),e._v(" 消费者")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Slf4j@Component@RabbitListener(queues = RabbitMqContent.MESSAGE_QUEUE_NAME)public class MessageConsumer {    @RabbitHandler    public void handler(String msg, Channel channel, Message message) throws IOException {        if (!StringUtils.isEmpty(msg)) {            MessagePojo messagePojo = JSONUtil.toBean(msg, MessagePojo.class);            LocalDateTime now = LocalDateTime.now();            LocalDateTime parse = LocalDateTime.parse(messagePojo.getCreateTime());            long l = Duration.between(parse,now).toMillis();            log.info("[收到延时消息] 接收时间:{},延时时间:{}秒,消息体:{}",now,l/1000D,JSONUtil.toJsonStr(messagePojo));        }    }}\n')])])]),t("h1",{attrs:{id:"两者比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者比较"}},[e._v("#")]),e._v(" 两者比较")]),e._v(" "),t("p",[e._v("TTL 是到达队列后才做过期时间判断, 只适用于过期时间相同的情况")]),e._v(" "),t("p",[e._v("插件的方式, 是在交换机中判断消息的时间, 到达时间后才根据规则发送到队列, 消息的过期时间更灵活")]),e._v(" "),t("p",[e._v("插件相比较TTL因为不需要额外的队列做中转, 所以使用上更方便,但是实际情况不一定允许让你安装插件, 而且插件方式的可靠性我还没测过….")])])}),[],!1,null,null,null);t.default=r.exports}}]);
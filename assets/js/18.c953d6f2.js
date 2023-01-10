(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{247:function(t,e,a){t.exports=a.p+"assets/img/image-20220106223828639.841b90e0.png"},324:function(t,e,a){t.exports=a.p+"assets/img/image-20220106225243822.f43554e2.png"},409:function(t,e,a){"use strict";a.r(e);var s=a(3),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ddd抽奖系统学习打卡🚀-day-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ddd抽奖系统学习打卡🚀-day-2"}},[t._v("#")]),t._v(" DDD抽奖系统学习打卡🚀 day 2")]),t._v(" "),e("p",[t._v("Created: January 30, 2022 8:54 AM")]),t._v(" "),e("h1",{attrs:{id:"简单工厂模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂模式"}},[t._v("#")]),t._v(" 简单工厂模式")]),t._v(" "),e("p",[t._v("第7节中，使用简单工厂模式进行不同的奖品的方法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("工程结构\nlottery-domain\n└── src\n    └── main\n        └── java\n            └── cn.itedus.lottery.domain.award\n                ├── model\n                ├── repository\n                │   ├── impl\n                │   │   └── AwardRepository\n                │   └── IAwardRepository\n                └── service\n                    ├── factory\n                    │   ├── DistributionGoodsFactory.java\n                    │   └── GoodsConfig.java\n                    └── goods\n                        ├── impl\n                        │   ├── CouponGoods.java\n                        │   ├── DescGoods.java\n                        │   ├── PhysicalGoods.java\n                        │   └── RedeemCodeGoods.java\n                        ├── DistributionBase.java\n                        └── IDistributionGoodsc.java\n")])])]),e("h2",{attrs:{id:"定义一个发奖接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义一个发奖接口"}},[t._v("#")]),t._v(" 定义一个发奖接口")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public interface IDistributionGoods {    /**     * 奖品配送接口，奖品类型（1:文字描述、2:兑换码、3:优惠券、4:实物奖品）     *     * @param req   物品信息     * @return      配送结果     */    DistributionRes doDistribution(GoodsReq req);}\n")])])]),e("h2",{attrs:{id:"然后做不同的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#然后做不同的实现"}},[t._v("#")]),t._v(" 然后做不同的实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@Componentpublic class CouponGoods extends DistributionBase implements IDistributionGoods {    @Override    public DistributionRes doDistribution(GoodsReq req) {        // 模拟调用优惠券发放接口        logger.info("模拟调用优惠券发放接口 uId：{} awardContent：{}", req.getuId(), req.getAwardContent());        // 更新用户领奖结果        super.updateUserAwardState(req.getuId(), req.getOrderId(), req.getAwardId(), Constants.AwardState.SUCCESS.getCode(), Constants.AwardState.SUCCESS.getInfo());        return new DistributionRes(req.getuId(), Constants.AwardState.SUCCESS.getCode(), Constants.AwardState.SUCCESS.getInfo());    }}\n')])])]),e("h2",{attrs:{id:"定义发奖实现的枚举"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义发奖实现的枚举"}},[t._v("#")]),t._v(" 定义发奖实现的枚举")]),t._v(" "),e("p",[t._v("这样就不用使用魔法值的")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('public enum AwardType {    /**     * 文字描述     */    DESC(1, "文字描述"),    /**     * 兑换码     */    RedeemCodeGoods(2, "兑换码"),    /**     * 优惠券     */    CouponGoods(3, "优惠券"),    /**     * 实物奖品     */    PhysicalGoods(4, "实物奖品");    private Integer code;    private String info;    AwardType(Integer code, String info) {        this.code = code;        this.info = info;    }    public Integer getCode() {        return code;    }    public void setCode(Integer code) {        this.code = code;    }    public String getInfo() {        return info;    }    public void setInfo(String info) {        this.info = info;    }}\n')])])]),e("h2",{attrs:{id:"定义一个简单工厂配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义一个简单工厂配置"}},[t._v("#")]),t._v(" 定义一个简单工厂配置")]),t._v(" "),e("p",[t._v("将具体的实现注入进去，声明一个map，以实现的枚举code做key，实现类做value存入")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public class GoodsConfig {    /** 奖品发放策略组 */    protected static Map<Integer, IDistributionGoods> goodsMap = new ConcurrentHashMap<>();    @Resource    private DescGoods descGoods;    @Resource    private RedeemCodeGoods redeemCodeGoods;    @Resource    private CouponGoods couponGoods;    @Resource    private PhysicalGoods physicalGoods;    @PostConstruct    public void init() {        goodsMap.put(Constants.AwardType.DESC.getCode(), descGoods);        goodsMap.put(Constants.AwardType.RedeemCodeGoods.getCode(), redeemCodeGoods);        goodsMap.put(Constants.AwardType.CouponGoods.getCode(), couponGoods);        goodsMap.put(Constants.AwardType.PhysicalGoods.getCode(), physicalGoods);    }}\n")])])]),e("h2",{attrs:{id:"定义一个简单工厂继承配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义一个简单工厂继承配置"}},[t._v("#")]),t._v(" 定义一个简单工厂继承配置")]),t._v(" "),e("p",[t._v("声明一个get实现方法，传入值就是对应枚举的code")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public class DistributionGoodsFactory extends GoodsConfig {    public IDistributionGoods getDistributionGoodsService(Integer awardType){        return goodsMap.get(awardType);    }}\n")])])]),e("p",[t._v("使用时，通过工厂的get方法，传入不同实现对应的code即可取出对应的实现实例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IDistributionGoods distributionGoodsService = distributionGoodsFactory.getDistributionGoodsService(drawAwardInfo.getAwardType());DistributionRes distributionRes = distributionGoodsService.doDistribution(goodsReq);\n")])])]),e("h1",{attrs:{id:"状态模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态模式"}},[t._v("#")]),t._v(" 状态模式")]),t._v(" "),e("p",[t._v("第8节中对于活动的状态变更使用的状态模式")]),t._v(" "),e("p",[t._v("看下面这个图就知道流程比较负责，通过ifelse就会很乱")]),t._v(" "),e("p",[e("img",{attrs:{src:a(247),alt:"../../../img//other/image-20220106223828639.png"}})]),t._v(" "),e("p",[t._v("image-20220106223828639")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("工程结构\nlottery-domain\n└── src\n    └── main\n        └── java\n            └── cn.itedus.lottery.domain.activity\n                ├── model\n                ├── repository\n                │   └── IActivityRepository\n                └── service\n                    ├── deploy\n                    ├── partake [待开发]\n                    └── stateflow\n                        ├── event\n                        │   ├── ArraignmentState.java\n                        │   ├── CloseState.java\n                        │   ├── DoingState.java\n                        │   ├── EditingState.java\n                        │   ├── OpenState.java\n                        │   ├── PassState.java\n                        │   └── RefuseState.java\n                        ├── impl\n                        │   └── StateHandlerImpl.java\n                        ├── AbstractState.java\n                        ├── IStateHandler.java\n                        └── StateConfig.java\n")])])]),e("h2",{attrs:{id:"定义状态抽象类或者接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定义状态抽象类或者接口"}},[t._v("#")]),t._v(" 定义状态抽象类或者接口")]),t._v(" "),e("p",[t._v("里面是所有的动作，比如提交，审批，撤回等等")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public abstract class AbstractState {    @Resource    protected IActivityRepository activityRepository;    /**     * 活动提审     *     * @param activityId   活动ID     * @param currentState 当前状态     * @return 执行结果     */    public abstract Result arraignment(Long activityId, Enum<Constants.ActivityState> currentState);    /**     * 审核通过     *     * @param activityId   活动ID     * @param currentState 当前状态     * @return 执行结果     */    public abstract Result checkPass(Long activityId, Enum<Constants.ActivityState> currentState);    /**     * 审核拒绝     *     * @param activityId   活动ID     * @param currentState 当前状态     * @return 执行结果     */    public abstract Result checkRefuse(Long activityId, Enum<Constants.ActivityState> currentState);    /**     * 撤审撤销     *     * @param activityId   活动ID     * @param currentState 当前状态     * @return 执行结果     */    public abstract Result checkRevoke(Long activityId, Enum<Constants.ActivityState> currentState);    /**     * 活动关闭     *     * @param activityId   活动ID     * @param currentState 当前状态     * @return 执行结果     */    public abstract Result close(Long activityId, Enum<Constants.ActivityState> currentState);    /**     * 活动开启     *     * @param activityId   活动ID     * @param currentState 当前状态     * @return 执行结果     */    public abstract Result open(Long activityId, Enum<Constants.ActivityState> currentState);    /**     * 活动执行     *     * @param activityId   活动ID     * @param currentState 当前状态     * @return 执行结果     */    public abstract Result doing(Long activityId, Enum<Constants.ActivityState> currentState);}\n")])])]),e("h2",{attrs:{id:"根据状态作出所有的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据状态作出所有的实现"}},[t._v("#")]),t._v(" 根据状态作出所有的实现")]),t._v(" "),e("p",[t._v("rvrnt中就是状态实现，实现中将该状态下所有的动作方法进行实现，哪些可执行怎么执行。比如提交审核的状态下的撤回动作可以正常执行，而发布方法就不能执行需要错误操作提醒")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@Componentpublic class ArraignmentState extends AbstractState {    @Override    public Result arraignment(Long activityId, Enum<Constants.ActivityState> currentState) {        return Result.buildResult(Constants.ResponseCode.UN_ERROR, "待审核状态不可重复提审");    }    @Override    public Result checkPass(Long activityId, Enum<Constants.ActivityState> currentState) {        boolean isSuccess = activityRepository.alterStatus(activityId, currentState, Constants.ActivityState.PASS);        return isSuccess ? Result.buildResult(Constants.ResponseCode.SUCCESS, "活动审核通过完成") : Result.buildErrorResult("活动状态变更失败");    }    @Override    public Result checkRefuse(Long activityId, Enum<Constants.ActivityState> currentState) {        boolean isSuccess = activityRepository.alterStatus(activityId, currentState, Constants.ActivityState.REFUSE);        return isSuccess ? Result.buildResult(Constants.ResponseCode.SUCCESS, "活动审核拒绝完成") : Result.buildErrorResult("活动状态变更失败");    }    @Override    public Result checkRevoke(Long activityId, Enum<Constants.ActivityState> currentState) {        boolean isSuccess = activityRepository.alterStatus(activityId, currentState, Constants.ActivityState.EDIT);        return isSuccess ? Result.buildResult(Constants.ResponseCode.SUCCESS, "活动审核撤销回到编辑中") : Result.buildErrorResult("活动状态变更失败");    }    @Override    public Result close(Long activityId, Enum<Constants.ActivityState> currentState) {        boolean isSuccess = activityRepository.alterStatus(activityId, currentState, Constants.ActivityState.CLOSE);        return isSuccess ? Result.buildResult(Constants.ResponseCode.SUCCESS, "活动审核关闭完成") : Result.buildErrorResult("活动状态变更失败");    }    @Override    public Result open(Long activityId, Enum<Constants.ActivityState> currentState) {        return Result.buildResult(Constants.ResponseCode.UN_ERROR, "非关闭活动不可开启");    }    @Override    public Result doing(Long activityId, Enum<Constants.ActivityState> currentState) {        return Result.buildResult(Constants.ResponseCode.UN_ERROR, "待审核活动不可执行活动中变更");    }}\n')])])]),e("h2",{attrs:{id:"声明枚举和配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#声明枚举和配置"}},[t._v("#")]),t._v(" 声明枚举和配置")]),t._v(" "),e("p",[t._v("这个和普通工厂差不多")]),t._v(" "),e("p",[t._v("使用时通过配置或者包一层上下文，通过传入当前的状态获取对应的实现类，然后执行动作")]),t._v(" "),e("h1",{attrs:{id:"分库分表的简单实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分库分表的简单实现"}},[t._v("#")]),t._v(" 分库分表的简单实现")]),t._v(" "),e("p",[t._v("对应第十节")]),t._v(" "),e("p",[t._v("代码比较多具体可以看源码，这里贴一个分库动作 分表动作 怎么实现的图")]),t._v(" "),e("p",[e("img",{attrs:{src:a(324),alt:"../../../img//other/image-20220106225243822.png"}})]),t._v(" "),e("p",[t._v("image-20220106225243822")])])}),[],!1,null,null,null);e.default=r.exports}}]);
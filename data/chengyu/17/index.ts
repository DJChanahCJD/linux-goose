import { Chapter, LevelEnum } from "../../../lib/types";
import { questions } from "./questions";
import readme from "./README.md";

export const chapter: Chapter = {
  id: "17",
  title: "研究工作学习状态",
  desc: "27个成语，分为6大类。小心仔细类：如履薄冰、兢兢业业；专心钻研类：聚精会神、专心致志、殚精竭虑、呕心沥血、苦心孤诣、废寝忘食、皓首穷经、心无旁骛；抓紧时间勤奋类：夜以继日、焚膏继晷、夙兴夜寐、目不窥园；有恒心有毅力地奋斗类：学而不厌、锲而不舍、奋发图强；绞尽脑汁费尽心思类：想方设法、苦心经营、挖空心思；辛苦奔波类：栉风沐雨、风餐露宿、筚路蓝缕、披星戴月；勤勉不懈怠类：孜孜不倦、孜孜矻矻、孜孜以求。",
  level: LevelEnum.MEDIUM,
  questions: questions,
  readme: readme,
};
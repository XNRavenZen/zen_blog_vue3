---
title: GP数据库测验
---
1. 表的数量太多或数据量太大,会给系统的运行和使用带来困难,以下关于表的设计说法正确的有哪些？ 
    1. 禁止使用二级分区表,因为二级分区表会造成表对象数量的急剧膨胀。 √
    2. 每个表空间目录下的数据文件数量,不允许超过 20 万,因为过多的数据文件会给系统维护带 来困难,如果数据文件数量过多,建议增加多个表空间,把数据表均匀分布到不同的表空间。 √
    3. 创建数据表的时候,必须使用 tablespace 子句指定用于存储表的表空间,而不是把所有表都存储在默认表空间。 √
    4. 对于数据量超过 1TB 的大表,需从应用设计方面,考虑对大表进行优化,例如是否可划分为历史数据表和当前数据表,并分开存放;是否应采用压缩存储节省空间;是否合理分区;是否应定期清理数据等等。√
>补充:
>- 每个表空间目录下的数据文件数量控制在80万以内
2. 数据类型的定义与相关数据的加载和使用紧密相关,数据类型的定义决定了数据所占用的空间大 小,因此,必须慎重设计 GP 数据仓库数据表的字段类型。 数据仓库的数据来自于多个异构的业务应 用系统,通常情况下,业务应用系 统的字段类型选择较为随意,不同的业务系统数据类型定义存在多 样化,彼此之 间差异较大;因此,在数据仓库中,需在参考源系统字段类型定义的情况下,结合 Greenplum 数据仓库平台的特点和要求,对字段数据类型进行设计。以下关于数据类型设计的说法正确的是? 
    1. 在 GP 系统中,CHAR、VARCHAR 和 TEXT 之间不存在性能差异,在其他的 DB 系统中,可能 CHAR 会表现出好的性能,但在 GPDB 中是不存在这种性能优势 的。在多数情况下,应该 选择使用 VARCHAR 而不是 CHAR。 √
    2. 定长字符串类型使用 varchar,而不使用 char。 √
    3. 对于 Numeric 类型来说,应该尽量选择更小的数据类型来适应数据;比如,选择 BIGINT类型来存储 SMALLINT 类型范围内的数值,会造成空间的大量浪费。 √
    4. 关联表的关联字段,必须使用相同的数据类型。如果做Join的Column具有相同的数据类型(比如主键PrimaryKey与外键ForeignKey),其工作效率会更高。√
>补充:
>- 关联表的关联字段,应该考虑相同的数据类型
>- 一般情况下,应尽量使用上述规范数据类型,避免出现诸如:Address,INET,ARRAY 等特殊类型字段

3. Greenplum 数据库根据数据分布键(Distributed Key,简称 DK,后同}值来决定 记录存储在哪一 个 segment 上,DK 不仅决定了数据在集群节点上的分布,还严 重影响数据查询和处理操作的执行 效率,需要非常慎重的选择数据表的分布键。关于DK选择需要遵守的原则以下说法正确的有哪些？ 
    1. 为了尽可能达到好的性能,所有的实例应该尽量储存等量的数据。若数据的分布不平衡或倾斜,那些储存了较多数据的实例在处理自己那部分数据时将需要耗费更多的工作量。为了实现数据的平坦分布,可以考虑选择具 有唯一性的DK,如主键。 √
    2. 在处理查询时,很多处理如关联、排序、聚合等若能够在实例本地完 成,其效率将远高于跨越系统级别(需在实例之间交叉传输数据)的操作。当不同的Table使用相同的DK时,在DK上的关联或者排序操作将会以高效的方式把绝大部分工作在本地完成。同时,总分父子表的DK应保持 一致;中间过程表、临时表的DK应尽可能保持和源表的DK一致,避免发生重分布。 √
    3. 在一个查询正被处理时,我们希望所有的实例实例都能够处理等量的工作负载,从而尽可能达 到好的性能。通过合理的DK设计,尽量使得查询处理的负载均匀分布在每个节点上,并且尽量保证where条件产生的结果集在 各个节点上也是均匀的。 √
    4. DK 字段不宜过多,DK 字段越少越好。√
>补充:
>- 数据均匀分布原则: 见选项1
>- 本地操作原则和DK一致原则: 见选项2
>- 均衡的查询负载原则: 见选项3
>- DK精简原则: 见选项4
>- 关联一致原则: 表与表之间存在关联时,各表应选择相同字段作为DK,并且做关联查询时,使用DK 作为连接字段,尽可能使连接包含全部DK字段
4. 以下关于Greenplum 数据库分布键设计规范的说法正确的有哪些？ 
    1. 相关联的表分布键应尽量一致,例如,账户主档、账户明细档、账户资金余额档存在关联查询 的需求,可选择账号作为这三张表的分布键。 √
    2. 对于协议主题的所有表,以及协议主题和其他主题的关系表,应采用协议编号为分布键。√
    3. 尽量避免使用随机分布策略,虽然其数据分布是均匀的,但随机分布策略总会导致在查询执行时,数据在节点之间的交换和迁移,影响执行性能。 √
    4. 随机分布的适合使用场景：查询时不需要和其它表关联、或只与小表关联的 数据表,使用随 机分布策略。√
5. 表分区用以解决特别大的表的问题,比如事实表,解决办法就是将表分成很 多小且更容易管理的部 分。分区表在执行给定的查询语句时,扫描相关的部分数 据而不是全表的数据从而提高查询性能。分区表对于数据库的管理也有帮助,比 如在数据仓库中滚动旧的数据。以下说明适合表分区的条件哪些选项是正确的？ 
    1. 只有非常大的事实表才适合做表分区。若在一张表中有数亿条记录,从 逻辑上把表分成较小 的分区将可以改善性能。而对于只有数万条或者更少记 录的表,对分区预先进行的管理开销将远 大于可以获得的性能改善。 √
    2. 查询语句的WHERE条件应该与分区的字段一致才能有效利用分区的优势提高查询性能。例 如,如果大部分的查询使用日期条件,那么按照月或者周的日期分区设计也许很有用, 而如果查询条件更多的是使用地区条件,可以考虑使用地区将表做列表类型的分区。 √
    3. 历史数据的滚动需求也是分区设计的考虑因素。比如,数据仓库中仅需要保留过去两个月的数据。如果数据按照月进行分区,将可以很容易的删除 掉两个月之前的数据,而近的数据存入近月份的分区即可。√
    4. 应该选择尽量把数据均匀分拆的规则。若每个分区储存的数据量相当, 那么查询性能的改善 将与分区的数量相关。例如,把一张表分为10个分区, 命中单个分区条件的查询扫表性能将比 未分区的情况下高10倍。√
6. 以下关于数据库分区使用规范的说法正确的有哪些？ 
    1. 在性能可以满足的情况下,表尽量不进行分区。 √
    2. 禁止使用二级分区,因其会造成表对象数量过多,增加执行计划生成的复杂性。 √
    3. 分区字段不可以 UPDATE,需要用 delete + insert 替代实现。 √
    4. 表的记录数/(集群数据节点数*4}大于 100 万条,请使用使用分区。√
7. 对数据表进行压缩,可以减少磁盘占用空间,但数据压缩和解压会增加 CPU 开销,压缩 APEND ONLY 表的性能相关的因素包括硬件、查询调优等方面。通常 建议在特定的环境下选择压缩储存模式 时,好根据比较测试的结果来确定。另 外,压缩表会增加数据库的数据库对象数。以下关于数据表压缩的设计应遵循的规范正确的有哪些？ 
    1. 需要频繁更新的数据表可以使用压缩存储。√
    2. 表的记录数/(集群数据节点数*4}大于 10 万条,或者重要的表,必须建成 压缩表。√
    3. 压缩表建议统一使用 zlib 压缩算法,压缩级别为 5 (appendonly=true, compresstype=zlib,     compresslevel=5),此压缩设置满足大多数的使用场景。 √
    4. 压缩表建议统一使用 zlib 压缩算法,压缩级别为 5 (appendonly=true, compresstype=zlib, compresslevel=5),此压缩设置满足大多数的使用场景。√
>知识点总结：
>1. gp数据表分为 堆表 和 apend only表。
>2. 堆表较常见。
>3. Apend only表可以进行表压缩。压缩可以减少磁盘空间,但是数据压缩,解压过程会消耗cpu。压缩表会增加数据库对象数。

>数据表压缩的设计规范：
>1. 频繁更新的表不可以使用。
>2. 表的记录数/(集群节点数* 4}大于10万条,或者重要的表,必须建成压缩表。
>3. 压缩表建议使用zlib压缩算法,压缩级别5。
>4. 所有的不再更新的历史表,备份表,归档表 统一使用压缩存储。
8. Greepnlum 的数据表在默认情况下采用行存储的方式,这种方式适用于绝大 多数的使用场景; 在 Greenplum 数据库当中,应尽量使用行存储。在某些使用场景下,采用列存储的方式,能提 升查询性能。以下关于使用列存储的说法正确的有哪些？ 
    1. 通常情况下采用行存储,只有在频繁查询,并且访问模式是只访问少量字段 的情况下,才优先使用列存储。 √
    2. 需控制数据库中列存储数据表的数量,过多的列存储表会造成系统文件数 量的急剧膨胀,影响系统性能。 √
    3. 面向用户访问的表,表的所有查询 SQL 语句中查询的字段数低于表总字段数 的 50%时,使用列压缩存储。 √
    4. 面向批处理加工的表,建议使用列压缩存储形式。
9. 以下关于位图索引说法正确的有哪些？ 
    1. Bitmap 索引应用在字段值可枚举,该字段值不经常更新,并且该字段经常用于查询的 where 条件。√
    2. 位图索引在分析查询方面可以获得显著的性能改善。WHERE 条件中的 AND 和 OR 操作可以 快速的转换为相应的源数据的查询。如果查询结果的数据 量很小,将可以快速的响应,而不是走全表扫描。 √
    3. 位图索引主要适用数据仓库应用, 大量的分析查询但却很少修改数据, 不适合大量并发事务 更新数据的 OLTP 类型应用。 √
    4. 和 B-tree 索引相比,Bitmap 索引的使用应当更保守,只有在经过充分 测试,证明其能改善 查询性能才建议使用。√
10. 结合 Greenplum 平台的特点,以下管索引设计的说法正确的有哪些？ 
    1. 原则上,数据库中的数据表不建立索引。只有提供给用户访问的表,才 考虑按用户访问特性, 针对常用查询字段建立索引。 √
    2. 创建组合索引时,必须将经常作为查询条件且可选择性大的列设置为索引的首列。√
    3. 如果在分区表中使用了索引,不允许在子表上单独创建和修改索引;通 常,删除顶级分区的索 引,系统会自动删除相关子表的索引,但如果子 表的索引有缺失,将不能自动删除子表的索引, 需要一一手动删除。 √
    4. 对频繁更新的数据表,应定期对其执行 reindex 操作,以重建索引。√
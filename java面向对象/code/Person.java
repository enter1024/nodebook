public class Person {
	String name;		// 成员变量
	String gender;
	int age;
	
	public Person(String name){
		//方法可以重构
		System.out.println("我是无参的构造函数");
	}
	
	public Person(String name, int age, String gender) {
		// 给成员变量赋值
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
	
	public void showName() {
		System.out.println("我的名字叫" + this.name);
	}
	
	public static void main(String[] args) {
		// java中的入口函数
		Person p = new Person("David", 18, "男");
		System.out.println(p);			// Person@15db9742(p在内存中是一个地址)
		System.out.println(p.name);		// David
		System.out.println(p.age);		// 18
		System.out.println(p.gender);	// 男
		p.showName();					// 我的名字叫David
	}
}